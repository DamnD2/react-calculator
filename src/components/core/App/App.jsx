import React from 'react';
import Keyboard from '../../Keyboard/Keyboard';
import Display from '../../Display/Display';
import calculate from '../../../utils/calculate';
import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstOperand: '0',
      secondOperand: '',
      operator: '',
    };

    this.maxLength = 10;
  }

  handleClick = (target) => {
    if (target) {
      const buttonType = target.dataset.type;
      const processing = this.buttonTypeMap[buttonType];

      if (processing) processing(target);
    }
  }

  get buttonTypeMap() {
    return {
      number: this.numberProcessing,
      operator: this.operatorProcessing,
      reset: this.resetProcessing,
      equal: this.equalProcessing,
    };
  }

  numberProcessing = (target) => {
    const { firstOperand, secondOperand, operator } = this.state;
    const operand = operator ? secondOperand : firstOperand;

    if (operand.length < this.maxLength) {
      if (operand === '0' || operand === '') {
        if (target.value === '.') {
          if (operator) {
            this.setState({ secondOperand: `0${target.value}` });
          } else {
            this.setState({ firstOperand: `0${target.value}` });
          }

          return;
        }

        if (operator) {
          this.setState({ secondOperand: target.value });
        } else {
          this.setState({ firstOperand: target.value });
        }

        return;
      }

      if (target.value === '.' && operand.indexOf('.') !== -1) {
        return;
      }

      if (operator) {
        this.setState({ secondOperand: secondOperand + target.value });
      } else {
        this.setState({ firstOperand: firstOperand + target.value });
      }
    }
  }

  operatorProcessing = (target) => {
    const { firstOperand, secondOperand, operator } = this.state;

    if (!secondOperand) {
      this.setState({ operator: target.value });
    }

    if (operator && secondOperand) {
      const result = calculate(operator, firstOperand, secondOperand, this.maxLength);

      this.setState({
        firstOperand: result.toString(),
        secondOperand: '',
        operator: target.value,
      });
    }
  }

  resetProcessing = () => {
    this.setState({
      firstOperand: '0',
      secondOperand: '',
      operator: '',
    });
  }

  equalProcessing = () => {
    const { firstOperand, secondOperand, operator } = this.state;
    const thiSecondOperand = secondOperand || firstOperand;

    if (operator) {
      const result = calculate(operator, firstOperand, thiSecondOperand, this.maxLength);

      this.setState({
        firstOperand: result.toString(),
        secondOperand: '',
        operator: '',
      });
    }
  }

  render() {
    const { firstOperand, secondOperand, operator } = this.state;

    return (
      <div className='calculator'>
        <Display state={{ firstOperand, secondOperand, operator }} />
        <Keyboard onClick={this.handleClick} />
      </div>
    );
  }
}

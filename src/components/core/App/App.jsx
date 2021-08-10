import React from 'react';
import Keyboard from '../../Keyboard/Keyboard';
import Display from '../../Display/Display';
import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expression: '',
      result: '0',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(element) {
    this.setState({
      expression: element,
      result: element,
    });
  }

  render() {
    const { expression, result } = this.state;

    return (
      <div className='calculator'>
        <Display state={{ expression, result }} />
        <Keyboard onClick={this.handleClick} />
      </div>
    );
  }
}

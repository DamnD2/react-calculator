import "./Display.scss";
import PropTypes from 'prop-types';

const Display = (props) => {
  const { state } = props;
  const { firstOperand, secondOperand, operator } = state;

  return (
    <div className='calculator__display'>
      <div className='calculator__display-expression'>{`${firstOperand} ${operator}`}</div>
      <div className='calculator__display-result'>{secondOperand || firstOperand}</div>
    </div>
  );
};

Display.propTypes = {
  state: PropTypes.objectOf(PropTypes.string),
  firstOperand: PropTypes.string,
  secondOperand: PropTypes.string,
  operator: PropTypes.string,
};

Display.defaultProps = { state: {}, firstOperand: '', secondOperand: '', operator: '' };

export default Display;

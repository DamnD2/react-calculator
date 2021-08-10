import "./Display.scss";
import PropTypes from 'prop-types';

const Display = (props) => {
  const { state } = props;
  const { expression, result } = state;

  return (
    <div className='calculator__display'>
      <div className='calculator__display-expression'>{expression}</div>
      <div className='calculator__display-result'>{result}</div>
    </div>
  );
};

Display.propTypes = {
  state: PropTypes.objectOf(PropTypes.string),
  expression: PropTypes.string,
  result: PropTypes.string,
};

Display.defaultProps = { state: {}, expression: '', result: '' };

export default Display;

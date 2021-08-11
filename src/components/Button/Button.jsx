import './Button.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonData } = props;
  const { value, type } = buttonData;

  return (<button value={value} className={type} data-type={type}>{value}</button>);
};

Button.propTypes = {
  buttonData: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
  ),
};

Button.defaultProps = { buttonData: {} };

export default Button;

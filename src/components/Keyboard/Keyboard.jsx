import React from "react";
import PropTypes from 'prop-types';
import Button from "../Button/Button";
import keyboardTemplate from "../../MOCK/mock_keyboardTemplate";
import keyboardButtons from "../../MOCK/mock_keyboardButtons";
import "./Keyboard.scss";

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);
  }

  getKeyboard() {
    const result = keyboardTemplate.map((element, index) => {
      const buttonData = keyboardButtons.find((btn) => btn.value === element);
      const key = index;

      return <Button buttonData={buttonData} key={key} />;
    });

    return result;
  }

  render() {
    const { onClick } = this.props;

    return (
      <div
        className='calculator__keyboard'
        role='button'
        tabIndex='0'
        onClick={(event) => onClick(event.target.value)}
        onKeyDown={(event) => onClick(event.target.value)}
      >
        {this.getKeyboard()}
      </div>
    );
  }
}

Keyboard.propTypes = { onClick: PropTypes.func.isRequired };

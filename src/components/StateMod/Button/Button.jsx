import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

class Button extends React.Component {
  render() {
    return (
      <button className={s.btn} onClick={this.props.click}>
        {this.props.value}
      </button>
    );
  }
}

Button.propTypes = {
  click: PropTypes.func,
  value: PropTypes.string,
};

export default Button;

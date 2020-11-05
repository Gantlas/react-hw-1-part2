import React from "react";
import PropTypes from "prop-types";
import s from "./CustomTextInput.module.css";

class CustomTextInput extends React.Component {
  render() {
    return (
      <div
        style={{
          padding: `${this.props.padding}rem`,
        }}
      >
        <span>{this.props.inputName}</span>
        <br />
        <input
          type={this.props.type}
          className={this.props.resetStyles ? s.reset : ""}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

CustomTextInput.propTypes = {
  padding: PropTypes.number,
  inputName: PropTypes.string,
  type: PropTypes.string,
  resetStyles: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

CustomTextInput.defaultProps = {
  padding: 1,
  inputName: "",
  type: "text",
  resetStyles: false,
  placeholder: "There will be a placeholder",
};

export default CustomTextInput;

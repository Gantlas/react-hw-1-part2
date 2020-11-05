import React from "react";
import PropTypes from "prop-types";
import s from "./DoubleSidedBinding.module.css";

class DoubleSidedBinding extends React.Component {
  state = {
    value: this.props.value,
  };

  change = (event) => {
    const text = event.target.value;
    const addedSymbol = text[text.length - 1];
    this.setState({ value: this.state.value + " " + addedSymbol });
  };

  render() {
    return (
      <div className={s.container}>
        <h1>Double-sided binding</h1>
        <input type="text" onChange={this.change} value={this.state.value} />
        <button
          onClick={() => {
            // eslint-disable-next-line no-undef
            console.log(this.state.value);
          }}
        >
          show state
        </button>
      </div>
    );
  }
}

DoubleSidedBinding.propTypes = {
  click: PropTypes.func,
  value: PropTypes.string,
};

export default DoubleSidedBinding;

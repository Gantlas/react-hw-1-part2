import React from "react";
import Button from "./Button/Button";
import s from "./StateMod.module.css";

class StateMod extends React.Component {
  state = {
    number: 0,
  };

  plus = () => {
    this.setState({ number: this.state.number + 1 });
  };

  minus = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div className={s.container}>
        <h1>State mod</h1>
        <Button value="-" click={this.minus} />
        <span>{this.state.number}</span>
        <Button value="+" click={this.plus} />
      </div>
    );
  }
}

export default StateMod;

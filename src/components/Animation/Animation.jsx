/* eslint-disable no-undef */
import React, { Component } from "react";
import s from "./Animation.module.css";

class Animation extends Component {
  state = {
    animation: false,
  };

  switch = () => {
    this.setState({ animation: !this.state.animation });
  };

  render() {
    return (
      <div className={s.container}>
        <h1>Animation</h1>
        <button onClick={this.switch}>
          {this.state.animation ? "Stop" : "Play"}
        </button>
        <div
          className={`${s.loader} ${this.state.animation ? s.animated : ""}`}
        ></div>
      </div>
    );
  }
}

export default Animation;

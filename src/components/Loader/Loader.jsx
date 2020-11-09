/* eslint-disable no-undef */
import React, { Component } from "react";
import s from "./Loader.module.css";

class Loader extends Component {
  state = {
    loading: false,
    greeting: "",
  };

  load = () => {
    setTimeout(this.sayHi, 3000);
    this.setState({ loading: true });
  };

  sayHi = () => {
    this.setState({ loading: false, greeting: "Hello world!!!" });
  };

  render() {
    return (
      <div className={s.container}>
        <h1>LOADER</h1>
        <button onClick={this.load}>Greeting</button>
        {this.state.loading ? <div className={s.loader}></div> : ""}
        {this.state.greeting ? <div>{this.state.greeting}</div> : ""}
      </div>
    );
  }
}

export default Loader;

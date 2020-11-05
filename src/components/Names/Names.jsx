import React from "react";
// import PropTypes from "prop-types";
import s from "./Names.module.css";
import data from "./Names.json";

class Names extends React.Component {
  state = {
    names: [],
  };

  addName = () => {
    const num = Math.floor(Math.random() * 13);
    this.setState({ names: [...this.state.names, data[num]] });
  };

  render() {
    return (
      <div className={s.container}>
        <h1>Names</h1>
        <button onClick={this.addName}>Add name</button>
        <ul>
          {this.state.names.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Names;

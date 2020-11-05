/* eslint-disable no-undef */
import React from "react";
import "./App.css";
import CustomTextInput from "./components/CustomTextInput/CustomTextInput";
import StateMod from "./components/StateMod/StateMod";

class App extends React.Component {
  state = {
    value: "",
  };

  render() {
    return (
      <div className="App">
        <CustomTextInput
          padding={5}
          inputName="second INput"
          type="text"
          resetStyles={true}
          onChange={(event) => {
            console.log(12);
            this.setState({ value: event.target.value });
          }}
          placeholder="TEST"
          value={this.state.value}
        />
        <StateMod />
      </div>
    );
  }
}

export default App;

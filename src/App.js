/* eslint-disable no-undef */
import React from "react";
import "./App.css";
import Animation from "./components/Animation/Animation";
import CustomTextInput from "./components/CustomTextInput/CustomTextInput";
import DoubleSidedBinding from "./components/DoubleSidedBinding/DoubleSidedBinding";
import Loader from "./components/Loader/Loader";
import Names from "./components/Names/Names.jsx";
import PropFunctions from "./components/PropFunctions/PropFunctions";
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
        <DoubleSidedBinding value="123" />
        <Names />
        <PropFunctions />
        <Loader />
        <Animation />
      </div>
    );
  }
}

export default App;

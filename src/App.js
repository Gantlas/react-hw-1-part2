/* eslint-disable no-undef */
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
      <Router className="App">
        <nav className="navigator">
          <Link to="/" className="nav-item">
            CustomTextInput
          </Link>
          <Link to="/state-mod" className="nav-item">
            StateMod
          </Link>
          <Link to="/double-sided-binding" className="nav-item">
            DoubleSidedBinding
          </Link>
          <Link to="/names" className="nav-item">
            Names
          </Link>
          <Link to="/prop-functions" className="nav-item">
            PropFunctions
          </Link>
          <Link to="/loader" className="nav-item">
            Loader
          </Link>
          <Link to="/animation" className="nav-item">
            Animation
          </Link>
        </nav>

        <Switch className="switch">
          <Route path="/state-mod">
            <StateMod />
          </Route>
          <Route path="/double-sided-binding">
            <DoubleSidedBinding value="123" />
          </Route>
          <Route path="/names">
            <Names />
          </Route>
          <Route path="/prop-functions">
            <PropFunctions />
          </Route>
          <Route path="/loader">
            <Loader />
          </Route>
          <Route path="/animation">
            <Animation />
          </Route>
          <Route path="/">
            <CustomTextInput
              padding={0}
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
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

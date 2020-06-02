import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Components

import Timer from "./components/Timer";
import Calendar from "./components/Calendar/Calendar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
      12: null,
      13: null,
      14: null,
      15: null,
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
      21: null,
      22: null,
      23: null,
      24: null,
      25: null,
      26: null,
      27: null,
      28: null,
      29: null,
      30: null,
      31: null,
    };
  }

  handleState(className, index) {
    this.setState({
      [`${index}`]: className,
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div id="calendar-container">
            <Calendar width="400px" />
          </div>
          <h1 id="app-title">
            Shower <span className="span-color">Timer</span>
          </h1>
          <div id="timer-container">
            <Timer />
          </div>
        </header>
      </div>
    );
  }
}

export default App;

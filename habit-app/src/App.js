import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Dependencies
import Cookies from "js-cookie";

// Components

import Timer from "./components/Timer";
import Calendar from "./components/Calendar/Calendar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      1: Cookies.getJSON("index1") || null,
      2: Cookies.getJSON("index2") || null,
      3: Cookies.getJSON("index3") || null,
      4: Cookies.getJSON("index4") || null,
      5: Cookies.getJSON("index5") || null,
      6: Cookies.getJSON("index6") || null,
      7: Cookies.getJSON("index7") || null,
      8: Cookies.getJSON("index8") || null,
      9: Cookies.getJSON("index9") || null,
      10: Cookies.getJSON("index10") || null,
      11: Cookies.getJSON("index11") || null,
      12: Cookies.getJSON("index12") || null,
      13: Cookies.getJSON("index13") || null,
      14: Cookies.getJSON("index14") || null,
      15: Cookies.getJSON("index15") || null,
      16: Cookies.getJSON("index16") || null,
      17: Cookies.getJSON("index17") || null,
      18: Cookies.getJSON("index18") || null,
      19: Cookies.getJSON("index19") || null,
      20: Cookies.getJSON("index20") || null,
      21: Cookies.getJSON("index21") || null,
      22: Cookies.getJSON("index22") || null,
      23: Cookies.getJSON("index23") || null,
      24: Cookies.getJSON("index24") || null,
      25: Cookies.getJSON("index25") || null,
      26: Cookies.getJSON("index26") || null,
      27: Cookies.getJSON("index27") || null,
      28: Cookies.getJSON("index28") || null,
      29: Cookies.getJSON("index29") || null,
      30: Cookies.getJSON("index30") || null,
      31: Cookies.getJSON("index31") || null,
    };
  }

  componentDidMount() {
    console.log(Cookies.getJSON("index22"));
  }

  handleState = (className, index) => {
    console.log(index);
    this.setState({
      [index]: className,
    });
    Cookies.set(`index${index}`, JSON.stringify(className));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div id="calendar-container">
            <Calendar data={this.state} width="400px" />
          </div>
          <h1 id="app-title">
            Shower <span className="span-color">Timer</span>
          </h1>
          <div id="timer-container">
            <Timer setClass={this.handleState} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;

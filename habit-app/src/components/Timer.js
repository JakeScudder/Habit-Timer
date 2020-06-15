import React, { Component } from "react";

//adapted/updated from SitePoint on Youtube

//I need something that takes the className puts it in the App.js state, which updates the Calendar state as well.

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 300,
      start: false,
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    console.log("mounted");
  }

  getSeconds() {
    return ("0" + (this.state.seconds % 60)).slice(-2);
  }

  getMinutes() {
    return Math.floor(this.state.seconds / 60);
  }

  handleStart() {
    this.incrementer = setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1,
      });
    }, 1000);
    this.toggle();
  }

  toggle() {
    let startButton = document.querySelector("#start");
    let stopButton = document.querySelector("#stop");

    if (!this.state.start) {
      startButton.style.display = "none";
      stopButton.style.display = "";
      this.setState({
        start: true,
      });
    } else {
      startButton.style.display = "";
      stopButton.style.display = "none";
      this.setState({
        start: false,
      });
    }
  }

  handleStop() {
    clearInterval(this.incrementer);
    let resetButton = document.querySelector("#reset");
    let saveButton = document.querySelector("#save");
    resetButton.style.display = "";
    saveButton.style.display = "";
    this.toggle();
  }

  handleReset() {
    let resetButton = document.querySelector("#reset");
    let saveButton = document.querySelector("#save");

    resetButton.style.display = "none";
    saveButton.style.display = "none";

    this.setState({
      seconds: 0,
      start: false,
    });
  }

  currentDay = () => {
    return this.state.dateContext.format("D");
  };

  handleSave() {
    let currentDayElem = document.querySelector(".day.current-day");
    let index = currentDayElem.firstChild.innerHTML;
    console.log(currentDayElem);
    // currentDayElem.removeChild(currentDayElem.firstChild);
    this.handleReset();

    if (this.state.seconds <= 300) {
      currentDayElem.className = "excellent";
      this.props.setClass();
    } else if (this.state.seconds <= 420) {
      currentDayElem.className = "great";
      this.props.setClass("great", index);
    } else if (this.state.seconds <= 600) {
      currentDayElem.className = "good";
    } else {
      currentDayElem.className = "needs-work";
    }
  }

  render() {
    return (
      <div>
        <h1 id="clock">
          {this.getMinutes()}:{this.getSeconds()}
        </h1>
        <button id="start" type="button" onClick={this.handleStart}>
          <h2>Start</h2>
        </button>
        <button
          id="stop"
          style={{ display: "none" }}
          type="button"
          onClick={this.handleStop}
        >
          <h2>Stop</h2>
        </button>
        <button
          id="reset"
          style={{ display: "none" }}
          type="button"
          onClick={this.handleReset}
        >
          <h2>Reset</h2>
        </button>
        <button
          id="save"
          style={{ display: "none" }}
          type="button"
          onClick={this.handleSave}
        >
          <h2>Save Data</h2>
        </button>
      </div>
    );
  }
}

export default Timer;

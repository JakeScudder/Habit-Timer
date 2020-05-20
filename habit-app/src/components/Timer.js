import React, { Component } from 'react';

class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      seconds: 0
    })
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  componentDidMount() {
    console.log("mounted");
  }

  getSeconds() {
    return (
      '0' + this.state.seconds % 60
    ).slice(-2);
  }

  getMinutes() {
    return(
      Math.floor(this.state.seconds / 60)
    );
  }

  handleStart() {
    this.incrementer = setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1
      });
    }, 1000)
  }

  handleStop() {
    clearInterval(this.incrementer);
  }

  render() {
    return (
      <div>
        <h1>{this.getMinutes()}:{this.getSeconds()}</h1>
        <button type="button" onClick={this.handleStart}>Start</button>
        <button type="button" onClick={this.handleStop}>Stop</button>
      </div>
    )
  }
}

export default Timer;

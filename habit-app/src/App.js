import React from 'react';
import logo from './logo.svg';
import './App.css';

//Components

import Timer from './components/Timer';
import Calendar from './components/Calendar/Calendar';

const style = {
  position: "relative",
  margin: "50px auto"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="calendar-container">
          <Calendar style={style} width="400px"/>
        </div>
        <h1>
          Shower Timer
        </h1>
        <div id="timer-container">
          <Timer />
        </div>
      </header>
    </div>
  );
}

export default App;

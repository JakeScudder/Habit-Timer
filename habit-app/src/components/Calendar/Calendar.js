import React, { Component } from "react";
import moment from "moment";
import "./calendar.css";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
      today: moment(),
      showMonthPopup: false,
      showYearPopup: false,
    };
  }

  weekdays = moment.weekdays(); //Sunday, Monday, etc.
  weekdaysShort = moment.weekdaysShort(); // Sun, Mon, Tue, etc.
  months = moment.months();

  year = () => {
    return this.state.dateContext.format("Y");
  };
  month = () => {
    return this.state.dateContext.format("MMMM");
  };
  daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
  };
  currentDate = () => {
    return this.state.dateContext.get("date");
  };
  currentDay = () => {
    return this.state.dateContext.format("D");
  };

  firstDayOfMonth = () => {
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext).startOf("month").format("d");
    return firstDay;
  };

  render() {
    // Map the weekday Sun, Mon, Tues
    let weekdays = this.weekdaysShort.map((day) => {
      return (
        <td key={day} className="week-day">
          {day}
        </td>
      );
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td key={i * 10} className="empty">
          {""}
        </td>
      );
    }

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className =
        d === parseInt(this.currentDay()) ? "day current-day" : `day ${d}`;
      let spanName = d === parseInt(this.currentDay()) ? `day current-span` : d;

      if (this.props.data[d] !== null) {
        console.log("found cookie");
        daysInMonth.push(
          <td key={d} className={this.props.data[d]}>
            <span id={spanName}>{d}</span>
          </td>
        );
      } else {
        daysInMonth.push(
          <td key={d} className={className}>
            <span id={spanName}>{d}</span>
          </td>
        );
      }
    }

    let totalDays = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalDays.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalDays.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });

    let trElements = rows.map((d, index) => {
      return <tr key={index}>{d}</tr>;
    });

    return (
      <div className="calendar-container">
        <table className="calendar">
          <thead>
            <tr className="calendar-head"></tr>
          </thead>
          <tbody>
            <tr>{weekdays}</tr>
            {trElements}
          </tbody>
        </table>
        <div id="legend-container">
          <div className="legend-color one">
            <p id="excellent"> &lt; 5 min </p>
          </div>
          <div className="legend-color two">
            <p id="great"> &lt; 7 min </p>
          </div>
          <div className="legend-color three">
            <p id="good"> &lt; 10 min </p>
          </div>
          <div className="legend-color four">
            <p id="needs-work"> &gt; 10 min </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;

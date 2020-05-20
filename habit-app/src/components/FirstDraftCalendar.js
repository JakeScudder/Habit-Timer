import React, { Component } from 'react';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.getDays();
  }

  getDays() {
    let now = new Date();
    let numOfDays = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    this.setState({
      days: numOfDays
    })
    this.createCalendar();
    return;
  }

  createCalendar() {
    

  }
  
  render() {
    let days = this.state.days;
    let calendarDays = [];
    let i;
    for (i = 1; i <= days; i++) {
      calendarDays.push(<p key={i}> {i}</p>)
    }
    console.log(calendarDays);
    return (
      <div id="calendar">
        {calendarDays}
      </div>
    )
  }
}

export default Calendar;
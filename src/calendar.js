import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Task from './task';
import './calendar.css';

import 'react-big-calendar/lib/css/react-big-calendar.css';

// We're going to use a third party component called react-big-calendar (http://intljusticemission.github.io/react-big-calendar/)
// to render our events so we don't have to worry about figuring out the positioning. All we have to do is convert from our data
// structures to the ones expected by the BigCalendar component

export default class Calendar extends React.Component {
  render() {
    return (
      <div className="calendar-container">
        <BigCalendar
          events={this.props.tasks}
          defaultView={BigCalendar.Views.MONTH}
          components={{
            event: Task
          }}
        />
      </div>
    );
  }
}

// Required: https://github.com/intljusticemission/react-big-calendar#localization-and-date-formatting
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

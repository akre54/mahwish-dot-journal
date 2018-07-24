import React, { Component } from 'react';
import TagsContainer from './tags';
import Calendar from './calendar';
import logo from './logo.svg';
import './app.css';

// We're going to set these up using example data for now. In the future we will make this
// data interactive using our React component's state

const TAGS = [
  {name: 'Health', color: 'green'},
  {name: 'Homework', color: 'orange'}
];

const TASKS = [
  {
    id: 0,
    start: new Date('2018-07-23T17:43:18.850Z'),
    end: new Date('2018-07-23T16:45:18.850Z'),
    title: 'Eat quinoa',
    status: 'incomplete',
    tag: TAGS[0]
  },
  {
    id: 1,
    start: new Date('2018-07-23T18:43:18.850Z'),
    end: new Date('2018-07-23T18:48:18.850Z'),
    title: 'Chemistry',
    status: 'in_progress',
    tag: TAGS[0]
  }
];

class App extends Component {
  state = {
    tags: TAGS,
    tasks: TASKS
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Mahwish's Bullet Journal</h1>
          <div>Edit app.js and save to see changes</div>
        </header>
        <div className="app-body">
          <TagsContainer tags={this.state.tags} />
          <Calendar tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;

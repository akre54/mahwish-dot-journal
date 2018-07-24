import React, { Component } from 'react';
import TagsContainer from './tags';
import Calendar from './calendar';
import EditTaskModal from './edit-task-modal';
import * as Statuses from './statuses';
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
    status: Statuses.INCOMPLETE,
    tag: TAGS[0]
  },
  {
    id: 1,
    start: new Date('2018-07-23T18:43:18.850Z'),
    end: new Date('2018-07-23T18:48:18.850Z'),
    title: 'Chemistry',
    status: Statuses.IN_PROGRESS,
    tag: TAGS[0]
  }
];

class App extends Component {
  state = {
    tags: TAGS,
    tasks: TASKS,
    changingTask: null
  }

  openModal = (task) => {
    this.setState({changingTask: task})
  }

  // This isn't actually hooked up at the moment. Just gives you an example of how you'd do this in the future
  addTask = ({title, tag}) => {
    const newTask = {
      title,
      startDate: new Date(),
      endDate: new Date(),
      status: Statuses.INCOMPLETE,
      tag
    };

    const tasks = [
      ...this.state.tasks,
      newTask
    ];

    this.setState({tasks});
  }

  updateTask = (task, newData) => {
    const {tasks} = this.state;
    const i = tasks.findIndex(t => t.id === task.id)

    // Create a new object, combining the old data with the new
    const newTask = {
      ...task,
      ...newData
    }

    // Create a new tasks array, replacing the old task object with the new one
    // This doesn't modify ("mutate") the old array, instead you set the state to the new object
    const newTasks = [
      ...tasks.slice(0, i),
      newTask,
      ...tasks.slice(i + 1)
    ];

    this.setState({tasks: newTasks});
    this.closeModal();
  }

  closeModal = () => {
    this.setState({changingTask: null});
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
          <Calendar tasks={this.state.tasks} editTask={this.openModal} />
        </div>
        <EditTaskModal
          task={this.state.changingTask}
          updateTask={this.updateTask}
          onCloseModal={this.onCloseModal}
        />
      </div>
    );
  }
}

export default App;

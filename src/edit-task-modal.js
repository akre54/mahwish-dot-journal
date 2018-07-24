import React from 'react';
import Modal from 'react-modal';
import * as Statuses from './statuses';
import './edit-task-modal.css';

const customStyles = {
  content: {
    top        : '50%',
    left       : '50%',
    right      : 'auto',
    bottom     : 'auto',
    marginRight: '-50%',
    transform  : 'translate(-50%, -50%)'
  }
};

export default class EditTaskModal extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    this.props.updateTask(this.props.task, data);
  }

  render() {
    const {task} = this.props;

    if (!task) {
      return null;
    }

    return (
      <Modal
        isOpen={true}
        onRequestClose={this.props.onCloseModal}
        contentLabel="Editing Task"
        style={customStyles}
      >
        <form onSubmit={this.onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" placeholder="title" defaultValue={task.title} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="status">Status</label>
            <select name="status">
              {Object.values(Statuses).map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          <button type="submit">Update</button>
        </form>
      </Modal>
    );
  }
}

// Required: https://github.com/reactjs/react-modal#examples
Modal.setAppElement('#root')

import React from 'react';

export default class Task extends React.Component {
  render() {
    const {event} = this.props;
    return (
      <div>{icon(event)} {event.title}</div>
    );
  }
}

class CompleteIcon extends React.Component {
  render() {
    const {event} = this.props;
    return (
      <svg width="15px" height="15px" viewBox="0 0 15 15">
        <rect x="0.5" y="0.5" width="14" height="14" fill={event.tag.color}></rect>
      </svg>
    );
  }
}

class IncompleteIcon extends React.Component {
  render() {
    const {event} = this.props;
    return (
      <svg width="15px" height="15px" viewBox="0 0 15 15">
        <rect x="0.5" y="0.5" width="14" height="14" fill="none" stroke={event.tag.color}></rect>
      </svg>
    );
  }
}


class InProgressIcon extends React.Component {
  render() {
    const {event} = this.props;
    return (
      <svg width="15px" height="15px" viewBox="0 0 15 15">
        <rect x="0.5" y="0.5" width="14" height="14" fill="none" stroke={event.tag.color}></rect>
        <polygon points="0 0 0 15 15 0" fill={event.tag.color}></polygon>
      </svg>
    );
  }
}

class CanceledIcon extends React.Component {
  render() {
    const {event} = this.props;
    return (
      <svg width="15px" height="15px" viewBox="0 0 15 15">
        <rect x="0.5" y="0.5" width="14" height="14" fill="none" stroke={event.tag.color}></rect>
        <path d="M0.5,3.5 L14.5,14.5"></path>
        <path d="M14.5,0.5 L14.5,0.5"></path>
      </svg>
    );
  }
}

const ICONS = {
  complete: CompleteIcon,
  incomplete: IncompleteIcon,
  in_progress: InProgressIcon,
  canceled: CanceledIcon
};

function icon(event) {
  const Icon = ICONS[event.status];
  return (
    <Icon event={event} />
  )
}

import React from 'react';
import PropTypes from 'prop-types';

export default class Tag extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    name: PropTypes.string
  }

  render() {
    return (
      <li
        className="tag"
        style={{color: this.props.color}}
      >
        • {this.props.name}
      </li>
    );
  }
}

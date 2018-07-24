import React from 'react';
import Tag from './tag';
import './tags.css';

export default class Tags extends React.Component {
  render() {
    return (
      <ul className="tags">{this.props.tags.map(tag => <Tag key={tag.name} {...tag} />)}</ul>
    );
  }
};

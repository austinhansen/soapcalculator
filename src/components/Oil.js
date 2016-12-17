import React, { Component } from 'react';

class Oil extends Component {
  render() {
    const { details, index } = this.props;
    return (
      <option value={index}>
        {details.name}
      </option>
    );
  }
}

export default Oil;

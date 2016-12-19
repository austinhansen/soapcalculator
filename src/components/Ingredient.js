import React, { Component } from 'react';

class Ingredient extends Component {
  render() {
    const { details, index } = this.props;
    const removeButton = <button onClick={() => this.props.removeFromIngredients(index)}>&times;</button>
    return (
      <div className="form-inline">
        <div className="form-group">
          <label className="form-control-inline">{details.name}</label>
          <input type="range" min="0" max="100" className="form-control form-control-inline" key={`${index}-percent`} />{removeButton}
        </div>
      </div>
    );
  }
}

export default Ingredient;

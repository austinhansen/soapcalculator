import React, { Component } from 'react';

class Ingredient extends Component {
  render() {
    const { details, index } = this.props;
    const removeButton = <button onClick={() => this.props.removeFromIngredients(index)}>&times;</button>
    return (
      <div className="form-inline">
        <div className="form-group">
          <label className="form-control-inline">{details.name}</label>
          <input type="text" className="form-control form-control-inline" key={`${index}-percent`} />
          <input type="text" className="form-control form-control-inline" key={`${index}-mass`} />{removeButton}
        </div>
      </div>
    );
  }
}

export default Ingredient;

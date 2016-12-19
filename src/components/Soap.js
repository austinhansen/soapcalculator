import React, { Component } from 'react';
import Ingredient from './Ingredient';

class Soap extends Component {
  constructor() {
    super();

    this.state = {
      total: ''
    };
  }

  render() {
    return (
      <div>
        <span>Percent</span>
        {
          Object
            .keys(this.props.ingredients)
            .map(key => <Ingredient
              key={key}
              index={key}
              details={this.props.ingredients[key]}
              removeFromIngredients={this.props.removeFromIngredients}
            />)
        }
        <div className="form-inline">
          <div className="form-group">
            <label>Total:</label>
            <input type="number" className="form-control" name="weight" disabled value={this.total} />
          </div>
        </div>
      </div>
    );
  }
}

export default Soap;

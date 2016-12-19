import React, { Component } from 'react';
import Ingredient from './Ingredient';

class Soap extends Component {
  render() {
    return (
      <div>
        <span>Percent</span>
        {
          Object
            .keys(this.props.soap)
            .map(key => <Ingredient
              key={key}
              index={key}
              details={this.props.soap[key]}
              removeFromSoap={this.props.removeFromSoap}
            />)
        }
        <div className="form-inline">
          <div className="form-group">
            <label>Total:</label>
            <input type="number" className="form-control" name="weight" disabled />
          </div>
        </div>
      </div>
    );
  }
}

export default Soap;

import React, { Component } from 'react';
import Oil from './Oil';

class OilList extends Component {
  render() {
    return (
      <div>
        <ul className="list-of-oils">
          <label>Select your oils</label>
          <div className="form-group">
            <select className="form-control" onChange={(e) => this.props.addToIngredients(e)}>
              <option></option>
              {
                Object
                  .keys(this.props.oils)
                  .map(key => <Oil key={key} index={key} details={this.props.oils[key]}/>)
              }
            </select>
          </div>
        </ul>
      </div>
    );
  }
}

export default OilList;

import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Recipe extends Component {
  constructor() {
    super();
    this.oilWeight = this.oilWeight.bind(this);
  }

  oilWeight(oil) {
    const totalWeight = this.props.weight;
    return oil * totalWeight / 100 || 0;
  }

  render() {
    const conversion = this.props.selectedMass.conversion;
    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Amount ({this.props.selectedMass.type})</th>
            </tr>
          </thead>
          <tbody>
            {
              Object
              .keys(this.props.soap)
              .map(key =>
                <tr key={key}>
                  <td>{this.props.oils[key].name}</td>
                  <td>{(this.oilWeight(this.props.soap[key].value) * conversion).toFixed(2)}</td>
                </tr>
              )
            }
            <tr>
              <td>Water (30%)</td>
              <td>{(this.props.weight * 0.3 * conversion).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Lye (NaOH)</td>
              <td>{(this.props.weight * 0.3 * conversion/ 2.2358).toFixed(2)}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Recipe;

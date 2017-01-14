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
    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Oil</th>
              <th>Amount (g)</th>
            </tr>
          </thead>
          <tbody>
            {
              Object
              .keys(this.props.soap)
              .map(key =>
                <tr key={key}>
                  <td>{this.props.oils[key].name}</td>
                  <td>{this.oilWeight(this.props.soap[key].value)}</td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Recipe;

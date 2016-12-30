import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Recipe extends Component {
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
                  <td>{this.props.recipe[key]}</td>
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

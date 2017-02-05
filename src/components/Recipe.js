import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Recipe extends Component {
  constructor() {
    super();
    this.oilWeight = this.oilWeight.bind(this);
    this.waterWeight = this.waterWeight.bind(this);
    this.lyePercentage = this.lyePercentage.bind(this);
  }

  oilWeight(oil) {
    const oilWeight = oil * this.props.weight / 100 || 0;
    const conversion = this.props.selectedMass.conversion;
    return (oilWeight * conversion).toFixed(2);
  }

  waterWeight() {
    const weight = this.props.weight;
    const waterPercentage = this.props.soap.waterPercentage;
    const conversion = this.props.selectedMass.conversion;
    return (weight * waterPercentage * conversion / 100).toFixed(2);
  }

  lyePercentage() {
    const soap = {...this.props.soap.ingredients};
    const soapIds = Object.keys(soap);
    const oils = {...this.props.oils};
    const weight = this.props.weight;
    const conversion = this.props.selectedMass.conversion;
    const superFat = 1 - (this.props.soap.superFat / 100);

    const saponificationValue = soapIds.reduce((prevValue, key) => {
      const percentage = soap[key].value;
      const oilSaponification = oils[key].saponification;

      prevValue += weight * percentage * oilSaponification / 100 || 0;
      return prevValue;
    }, 0);

    return (saponificationValue * superFat * conversion).toFixed(2);
  }

  render() {
    const conversionType = this.props.selectedMass.type;
    const waterPercentage = this.props.soap.waterPercentage;
    const waterWeight = this.waterWeight();
    const lyePercentage = this.lyePercentage();

    return (
      <div>
        <h4>Recipe</h4>
        <hr />

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Amount ({conversionType})</th>
            </tr>
          </thead>
          <tbody>
            {
              Object
              .keys(this.props.soap.ingredients)
              .map(key =>
                <tr key={key}>
                  <td>{this.props.oils[key].name}</td>
                  <td>{this.oilWeight(this.props.soap.ingredients[key].value)}</td>
                </tr>
              )
            }
            <tr>
              <td>Water ({waterPercentage}%)</td>
              <td>{waterWeight}</td>
            </tr>
            <tr>
              <td>Lye (NaOH)</td>
              <td>{lyePercentage}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

Recipe.propTypes = {
  oils: React.PropTypes.object.isRequired,
  soap: React.PropTypes.object.isRequired,
  weight: React.PropTypes.number.isRequired,
  selectedMass: React.PropTypes.object.isRequired
};

export default Recipe;

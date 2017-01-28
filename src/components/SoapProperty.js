import React, { Component } from "react";

class SoapProperty extends Component {
  constructor() {
    super();
    this.soapProperty = this.soapProperty.bind(this);
  }

  soapProperty(property) {
    const soap = {...this.props.soap};
    const soapIds = Object.keys(soap)

    const propertyValue = soapIds.reduce((prevValue, key) => {
      const percentage = soap[key].value;
      const value = soap[key][property];

      prevValue += percentage * value / 100 || 0;
      return prevValue;
    }, 0);

    return Math.round(propertyValue);
  }

  render() {
    return (
      <tr>
        <td>{this.props.description}</td>
        <td>{this.soapProperty(this.props.property)}</td>
      </tr>
    );
  }
}

export default SoapProperty;

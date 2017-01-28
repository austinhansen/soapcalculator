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
    const low = this.props.lowIdealValue;
    const high = this.props.highIdealValue;
    const soapProperty = this.soapProperty(this.props.property);
    const className = soapProperty >= low && soapProperty <= high ? "good-soap-property" : "";
    const description = `${this.props.description} (${low} to ${high}):`;

    return (
      <tr className={className} >
        <td>{description}</td>
        <td>{soapProperty}</td>
      </tr>
    );
  }
}

export default SoapProperty;

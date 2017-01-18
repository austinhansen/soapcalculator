import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class SoapProperties extends Component {
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
      <div>
        <h4>C. Your Soap's Properties</h4>
        <hr />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Property (recommended values)</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cleansing (12 to 22):</td>
              <td>{this.soapProperty('cleansing')}</td>
            </tr>
            <tr>
              <td>Conditioning (44 to 69):</td>
              <td>{this.soapProperty('conditioning')}</td>
            </tr>
            <tr>
              <td>Creaminess (16 to 48):</td>
              <td>{this.soapProperty('creaminess')}</td>
            </tr>
            <tr>
              <td>Foaming (14 to 46):</td>
              <td>{this.soapProperty('foaming')}</td>
            </tr>
            <tr>
              <td>Hardness (29 to 54):</td>
              <td>{this.soapProperty('hardness')}</td>
            </tr>
            <tr>
              <td>Iodine (41 to 70):</td>
              <td>{this.soapProperty('iodine')}</td>
            </tr>
            <tr>
              <td>INS (136 to 165):</td>
              <td>{this.soapProperty('INS')}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default SoapProperties;

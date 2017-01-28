import React, { Component } from "react";
import { Table } from "react-bootstrap";
import SoapProperty from "./SoapProperty";

class SoapProperties extends Component {
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
            <SoapProperty soap={this.props.soap} description="Cleansing (12 to 22):" property="cleansing" />
            <SoapProperty soap={this.props.soap} description="Conditioning (44 to 69):" property="conditioning" />
            <SoapProperty soap={this.props.soap} description="Creaminess (16 to 48):" property="creaminess" />
            <SoapProperty soap={this.props.soap} description="Foaming (14 to 46):" property="foaming" />
            <SoapProperty soap={this.props.soap} description="Hardness (29 to 54):" property="hardness" />
            <SoapProperty soap={this.props.soap} description="Iodine (41 to 70):" property="iodine" />
            <SoapProperty soap={this.props.soap} description="INS (136 to 165):" property="INS" />
          </tbody>
        </Table>
      </div>
    );
  }
}

export default SoapProperties;

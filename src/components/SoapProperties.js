import React, { Component } from "react";
import { Table } from "react-bootstrap";
import SoapProperty from "./SoapProperty";

class SoapProperties extends Component {
  render() {
    return (
      <div>
        <h4>Final Properties</h4>
        <hr />

        <Table striped bordered hover condensed>
          <thead>
            <tr>
              <th>Property (recommended values)</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <SoapProperty soap={this.props.soap} description="Cleansing" lowIdealValue={12} highIdealValue={22} property="cleansing" />
            <SoapProperty soap={this.props.soap} description="Conditioning" lowIdealValue={44} highIdealValue={69} property="conditioning" />
            <SoapProperty soap={this.props.soap} description="Creaminess" lowIdealValue={16} highIdealValue={48} property="creaminess" />
            <SoapProperty soap={this.props.soap} description="Foaming" lowIdealValue={14} highIdealValue={46} property="foaming" />
            <SoapProperty soap={this.props.soap} description="Hardness" lowIdealValue={29} highIdealValue={54} property="hardness" />
            <SoapProperty soap={this.props.soap} description="Iodine" lowIdealValue={41} highIdealValue={70} property="iodine" />
            <SoapProperty soap={this.props.soap} description="INS" lowIdealValue={136} highIdealValue={165} property="INS" />
          </tbody>
        </Table>
      </div>
    );
  }
}

SoapProperties.propTypes = {
  soap: React.PropTypes.object.isRequired
};

export default SoapProperties;

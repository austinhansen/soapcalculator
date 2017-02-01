import React, { Component } from "react";
import { Button, Collapse, Col, Row } from "react-bootstrap";
import WaterPercentage from "./WaterPercentage";
import SuperFat from "./SuperFat";

class OptionalSettings extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <Col sm={12}>
        <Button bsStyle="primary" onClick={ () => this.setState({ open: !this.state.open }) }>Optional Settings</Button>
        <Collapse in={this.state.open}>
          <Row>
            <br/>
            <Col sm={6}>
              <WaterPercentage waterPercentage={this.props.soap.waterPercentage} updateWaterPercentage={this.props.updateWaterPercentage} />
            </Col>

            <Col sm={6}>
              <SuperFat superFat={this.props.soap.superFat} updateSuperFat={this.props.updateSuperFat}/>
            </Col>
          </Row>
        </Collapse>
      </Col>
    );
  }
}

export default OptionalSettings;

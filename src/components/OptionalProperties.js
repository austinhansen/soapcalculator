import React, { Component } from "react";
import { Button, Collapse, Col, Row } from "react-bootstrap";
import WaterPercentage from "./WaterPercentage";
import SuperFat from "./SuperFat";

class OptionalProperties extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <Col sm={12}>
        <Button bsStyle="primary" onClick={ () => this.setState({ open: !this.state.open }) }>Optional Properties</Button>
        <Collapse in={this.state.open}>
          <Row>
            <br/>
            <Col sm={4}>
              <WaterPercentage waterPercentage={this.props.soap.waterPercentage} updateWaterPercentage={this.props.updateWaterPercentage} />
            </Col>

            <Col sm={4}>
              <SuperFat superFat={this.props.soap.superFat} updateSuperFat={this.props.updateSuperFat}/>
            </Col>
          </Row>
        </Collapse>
      </Col>
    );
  }
}

OptionalProperties.propTypes = {
  soap: React.PropTypes.object.isRequired,
  updateWaterPercentage: React.PropTypes.func.isRequired,
  updateSuperFat: React.PropTypes.func.isRequired
};

export default OptionalProperties;

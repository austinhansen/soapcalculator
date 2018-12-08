import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  InputGroup,
  ControlLabel,
  FormControl,
  FormGroup
} from "react-bootstrap";

class WaterPercentage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.updateWaterPercentage(event.target.value);
  }

  render() {
    return (
      <div>
        <ControlLabel>Water</ControlLabel>
        <FormGroup>
          <InputGroup>
            <FormControl
              value={this.props.waterPercentage}
              onChange={this.handleChange}
              type="number"
              alt="Water Percentage"
              placeholder="30"
            />
            <InputGroup.Addon>%</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

WaterPercentage.propTypes = {
  waterPercentage: PropTypes.number.isRequired,
  updateWaterPercentage: PropTypes.func.isRequired
};

export default WaterPercentage;

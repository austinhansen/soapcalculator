import React, { Component } from "react";
import { InputGroup, ControlLabel, FormControl, FormGroup } from "react-bootstrap";

class WaterPercentage extends Component {
  handleChange = (event) =>  {
    this.props.updateWaterPercentage(event.target.value)
  }

  render() {
    return (
      <div>
        <ControlLabel>Water</ControlLabel>
        <FormGroup>
          <InputGroup>
            <FormControl value={this.props.waterPercentage} onChange={this.handleChange} type="number" alt="Water Percentage" placeholder="30" />
            <InputGroup.Addon>%</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

WaterPercentage.propTypes = {
  waterPercentage: React.PropTypes.string,
  updateWaterPercentage: React.PropTypes.func
};

export default WaterPercentage;

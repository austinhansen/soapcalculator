import React, { Component } from "react";
import { InputGroup, ControlLabel, FormControl, FormGroup } from "react-bootstrap";

class SuperFat extends Component {
  handleChange = (event) =>  {
    this.props.updateSuperFat(event.target.value)
  }

  render() {
    return (
      <div>
        <ControlLabel>Super Fat</ControlLabel>
        <FormGroup>
          <InputGroup>
            <FormControl value={this.props.superFat} onChange={this.handleChange} type="number" alt="Super Fat %" placeholder="5" />
            <InputGroup.Addon>%</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

SuperFat.propTypes = {
  superFat: React.PropTypes.number,
  updateSuperFat: React.PropTypes.func
};

export default SuperFat;

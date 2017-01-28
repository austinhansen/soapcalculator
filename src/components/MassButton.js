import React, { Component } from "react";
import { InputGroup} from "react-bootstrap";

class MassButton extends Component {
  render() {
    let className = this.props.selectedselectedMass === this.props.selectedMassName ? "selected-mass-button" : "";

    return (
      <InputGroup.Addon className={className} onClick={(e) => this.props.handleClick(e)}>{this.props.selectedMassName}</InputGroup.Addon>
    );
  }
}

export default MassButton;

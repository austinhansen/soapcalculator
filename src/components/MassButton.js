import React, { Component } from "react";
import { InputGroup} from "react-bootstrap";

class MassButton extends Component {
  render() {
    const className = this.props.selectedMassType === this.props.selectedMassName ? "selected-mass-button" : "";

    return (
      <InputGroup.Addon className={className} onClick={(e) => this.props.handleClick(e)}>{this.props.selectedMassName}</InputGroup.Addon>
    );
  }
}

MassButton.propTypes = {
  selectedMassName: React.PropTypes.string,
  selectedMassType: React.PropTypes.string,
  handleClick: React.PropTypes.func
};

export default MassButton;

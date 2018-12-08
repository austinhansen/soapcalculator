import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputGroup } from "react-bootstrap";

class MassButton extends Component {
  render() {
    const className =
      this.props.selectedMassType === this.props.selectedMassName
        ? "selected-mass-button"
        : "";

    return (
      <InputGroup.Addon
        className={className}
        onClick={e => this.props.handleClick(e)}
      >
        {this.props.selectedMassName}
      </InputGroup.Addon>
    );
  }
}

MassButton.propTypes = {
  selectedMassName: PropTypes.string.isRequired,
  selectedMassType: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default MassButton;

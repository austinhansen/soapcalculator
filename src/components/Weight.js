import React, { Component } from "react";
import { Col, FormGroup, InputGroup, FormControl } from "react-bootstrap";
import MassButton from "./MassButton";

class Weight extends Component {
  constructor() {
    super();

    this.state = {
      weights: {
        bar: 99.25,
        barFormatted: 99,
        total: 794
      }
    };
  }

  massConversion(massType) {
    if (massType === "g") {
      return 1;
    } else if (massType === "oz") {
      return 0.035274;
    }
  }

  updateWeights(massType) {
    const totals = {
      g: {
        bar: 99.25,
        barFormatted: 99,
        total: 794
      },
      oz: {
        bar: 3.5,
        barFormatted: 3.5,
        total: 28
      }
    };

    var newWeights = this.state.weights;
    newWeights = totals[massType];

    this.setState({
      weights: newWeights
    });
  }

  handleClick(event) {
    const selectedMass = event.target.innerText;
    const selectedMassConversion = this.massConversion(selectedMass);
    const currentMass = this.props.selectedMass.type;
    this.updateWeights(selectedMass);
    if (currentMass !== selectedMass) {
      this.props.updateSelectedMass(selectedMass, selectedMassConversion);
    }
  }

  render() {
    var weightTip = "";
    const massType = this.props.selectedMass.type;
    const barWeight = this.state.weights.barFormatted;
    const barCount = Math.floor(this.props.weight / this.state.weights.bar);
    const totalWeight = Math.round(this.state.weights.total);

    if (this.props.weight >= 0) {
      weightTip = (
        <p>
          A bar of soap is roughly {`${barWeight} ${massType}`}. Your recipe
          will make ~{barCount} bars of soap. <br />
          We recommend making enough for 8 bars at a time ({totalWeight}{" "}
          {massType}
          ), which will fit into a{" "}
          <a
            href="https://www.amazon.ca/Crafters-Choice-1501-Regular-Silicone/dp/B0083ID7CE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crafter's Choice 1501 mold
          </a>
          .
        </p>
      );
    }

    return (
      <Col sm={8}>
        <h2>Step 1: How much soap do you want to make?</h2>
        <FormGroup>
          <InputGroup>
            <FormControl
              value={this.props.weight}
              onChange={e => this.props.updateWeight(e)}
              type="number"
              alt="Soap Weight"
              placeholder={barWeight}
            />
            <MassButton
              selectedMassType={this.props.selectedMass.type}
              handleClick={e => this.handleClick(e)}
              selectedMassName="g"
            />
            <MassButton
              selectedMassType={this.props.selectedMass.type}
              handleClick={e => this.handleClick(e)}
              selectedMassName="oz"
            />
          </InputGroup>
        </FormGroup>
        {weightTip}
      </Col>
    );
  }
}

Weight.propTypes = {
  selectedMass: React.PropTypes.object.isRequired,
  updateSelectedMass: React.PropTypes.func.isRequired,
  weight: React.PropTypes.number.isRequired,
  updateWeight: React.PropTypes.func.isRequired
};

export default Weight;

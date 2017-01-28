import React, { Component } from "react";
import { Col, FormGroup, InputGroup, FormControl } from "react-bootstrap";
import MassButton from "./MassButton";

class Weight extends Component {

  massConversion(massType) {
    if (massType === "g") {
      return "1";
    } else if (massType === "oz") {
      return "0.035274";
    }
  }

  handleClick(event) {
    const selectedMass = event.target.innerText;
    const selectedMassConversion = this.massConversion(selectedMass);
    this.props.updateSelectedMass(selectedMass, selectedMassConversion);
  }

  render() {
    var weightTip = "";
    const conversion = this.props.selectedMass.conversion;
    const massType = this.props.selectedMass.type;
    const barWeight = Math.round(conversion * 156);
    const totalWeight = Math.round(conversion * 1248);

    if (this.props.weight >= 0) {
      weightTip = <p>
                    A bar of soap is roughly {`${barWeight} ${massType}`}. Your recipe will make ~{Math.floor(this.props.weight / 156)} bars of soap. <br/>
                    We recommend making enough for 8 bars at a time ({totalWeight} {massType}), which will fit into a <a href="https://www.amazon.ca/Crafters-Choice-1501-Regular-Silicone/dp/B0083ID7CE" target="_blank">Crafter's Choice 1501 mold</a>.
                  </p>;
    }

    return (
      <Col sm={12}>
        <h2>Step 1: How much soap do you want to make?</h2>
        <FormGroup>
          <InputGroup>
            <FormControl value={this.props.weight} onChange={(e) => this.props.updateWeight(e)} type="number" alt="Soap Weight" placeholder={barWeight} />
            <MassButton selectedselectedMass={this.props.selectedMass.type} handleClick={(e) => this.handleClick(e)} selectedMassName='g'/>
            <MassButton selectedselectedMass={this.props.selectedMass.type} handleClick={(e) => this.handleClick(e)} selectedMassName='oz'/>
          </InputGroup>
        </FormGroup>
        {weightTip}
      </Col>
    );
  }
}

export default Weight;

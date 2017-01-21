import React, { Component } from 'react';
import { Col, FormGroup, InputGroup, FormControl } from 'react-bootstrap';

class Weight extends Component {
  render() {
    let weightTip = null;
    if (this.props.weight >= 0) {
      weightTip = <p>
                    A bar of soap is roughly 156g. Your recipe will make ~{Math.floor(this.props.weight / 156)} bars of soap. <br/>
                    We recommend making enough for 8 bars at a time (1250g), which will fit into a <a href="https://www.amazon.ca/Crafters-Choice-1501-Regular-Silicone/dp/B0083ID7CE" target="_blank">Crafter's Choice 1501 mold</a>.
                  </p>;
    }

    return (
      <Col sm={12}>
        <h2>Step 1: How much soap do you want to make?</h2>
        {weightTip}
        <FormGroup>
          <InputGroup>
            <FormControl value={this.props.weight} onChange={(e) => this.props.updateWeight(e)} type="number" alt="Soap Weight" />
            <InputGroup.Addon>g</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </Col>
    );
  }
}

export default Weight;

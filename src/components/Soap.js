import React, { Component } from 'react';
import Ingredient from './Ingredient';
import { ControlLabel, Form, InputGroup, FormGroup, FormControl } from 'react-bootstrap';

class Soap extends Component {
  render() {
    const soapIds = Object.keys(this.props.soap);
    const total = soapIds.reduce((prevTotal, key) => {
      const percentage = parseInt(this.props.soap[key]['value']);
      return prevTotal + (percentage || 0);
    }, 0);

    return (
      <div>
        <ControlLabel>Oil Percentages</ControlLabel>
        <FormGroup>
          {
            Object
              .keys(this.props.soap)
              .map(key => <Ingredient
                key={key}
                index={key}
                details={this.props.soap[key]}
                removeFromSoap={this.props.removeFromSoap}
                updateIngredientPercentage={this.props.updateIngredientPercentage}
              />)
          }
        </FormGroup>
        <Form inline>
          <FormGroup>
            <ControlLabel>Total:</ControlLabel>
            <InputGroup>
              <FormControl type="number" value={total} readOnly />
              <InputGroup.Addon>%</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
       </Form>
      </div>
    );
  }
}

export default Soap;

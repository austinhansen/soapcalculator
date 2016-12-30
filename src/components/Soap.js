import React, { Component } from 'react';
import Ingredient from './Ingredient';
import { ControlLabel, Form, InputGroup, FormGroup, FormControl } from 'react-bootstrap';

class Soap extends Component {
  constructor() {
    super();
    this.updateIngredientPercentage = this.updateIngredientPercentage.bind(this);
  }

  updateIngredientPercentage(key, value) {
    const soap = {...this.props.soap};
    const percentage = value >= 0 ? value : 0;
    soap[key]['value'] = percentage;
    this.setState({ soap });
  }

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
                updateIngredientPercentage={this.updateIngredientPercentage}
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

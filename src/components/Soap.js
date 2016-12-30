import React, { Component } from 'react';
import Ingredient from './Ingredient';
import { ControlLabel, Form, FormGroup, FormControl } from 'react-bootstrap';

class Soap extends Component {
  render() {
    const soapIds = Object.keys(this.props.soap);
    const total = soapIds.reduce((prevTotal, key) => {
      // const fish = this.props.oils[key];
      // const count = this.props.soap[key];
      // return prevTotal + (count || 0)
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
              />)
          }
        </FormGroup>
        <Form inline>
         <FormGroup>
           <ControlLabel>Total:</ControlLabel>
           {' '}
           <FormControl type="number" />
         </FormGroup>
       </Form>
      </div>
    );
  }
}

export default Soap;

import React, { Component } from 'react';
import { InputGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class Ingredient extends Component {
  handleChange = (event) =>  {
    const { index } = this.props;
    this.props.updateIngredientPercentage(index, event.target.value)
  }

  render() {
    const { details, index } = this.props;
    return (
      <div>
        <ControlLabel>{details.name}</ControlLabel>
        <InputGroup>
          <FormControl type="number" value={details.value || 0} onChange={this.handleChange} key={`${index}-percent`} />
          <InputGroup.Addon>%</InputGroup.Addon>
          <InputGroup.Button onClick={() => this.props.removeFromSoap(index)}>
            <Button bsStyle="danger">x</Button>
          </InputGroup.Button>
        </InputGroup>
      </div>
    );
  }
}

export default Ingredient;

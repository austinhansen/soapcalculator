import React, { Component } from 'react';
import { InputGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class Ingredient extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { index } = this.props;
    this.props.updateIngredientPercentage(index, event.target.value);
  }

  render() {
    const { details, index } = this.props;
    return (
      <div>
        <ControlLabel>{details.name}</ControlLabel>
        <InputGroup>
          <FormControl type="number" value={details.value} onChange={this.handleChange} key={`${index}-percent`} alt="Ingredient" />
          <InputGroup.Addon>%</InputGroup.Addon>
          <InputGroup.Button onClick={() => this.props.removeFromSoap(index)}>
            <Button bsStyle="danger">x</Button>
          </InputGroup.Button>
        </InputGroup>
      </div>
    );
  }
}

Ingredient.propTypes = {
  index: React.PropTypes.string.isRequired,
  details: React.PropTypes.object.isRequired,
  removeFromSoap: React.PropTypes.func.isRequired,
  updateIngredientPercentage: React.PropTypes.func.isRequired
};

export default Ingredient;

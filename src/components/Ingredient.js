import React, { Component } from 'react';
import { InputGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class Ingredient extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (event) =>  {
    this.setState({value: event.target.value});
  }

  render() {
    const { details, index } = this.props;
    return (
      <div>
        <ControlLabel>{details.name}</ControlLabel>
        <InputGroup>
          <FormControl type="number" onChange={this.handleChange} key={`${index}-percent`} />
          <InputGroup.Button onClick={() => this.props.removeFromSoap(index)}>
            <Button bsStyle="danger">x</Button>
          </InputGroup.Button>
        </InputGroup>
      </div>
    );
  }
}

export default Ingredient;

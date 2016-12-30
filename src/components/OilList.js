import React, { Component } from 'react';
import Oil from './Oil';
import { Button, FormGroup, FormControl, ControlLabel, ListGroup, ListGroupItem } from 'react-bootstrap';

class OilList extends Component {
  constructor() {
    super();
    this.state = {selectedOil: {name: ''}};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) =>  {
    const oils = this.props.oils;
    const key = event.target.value;
    const oil = oils[key];
    oil['key'] = key

    if(oil) {
      this.setState({selectedOil: oil});
    };
  }

  handleSubmit() {
    this.props.addToSoap(this.state.selectedOil.key);
  }

  render() {
    return (
      <div>
        <form>
          <FormGroup>
            <ControlLabel>Select your oils</ControlLabel>
            <FormControl onChange={this.handleChange} componentClass="select" >
              <option></option>
              {
                Object
                  .keys(this.props.oils)
                  .map(key => <Oil key={key} index={key} details={this.props.oils[key]}/>)
              }
            </FormControl>
            <Button onClick={this.handleSubmit} bsStyle="primary" block >Add</Button>
          </FormGroup>
        </form>

        <ListGroup>
          <ListGroupItem>Cleansing: {this.state.selectedOil.cleansing || ''}</ListGroupItem>
          <ListGroupItem>Conditioning: {this.state.selectedOil.conditioning || ''}</ListGroupItem>
          <ListGroupItem>Creaminess: {this.state.selectedOil.creaminess || ''}</ListGroupItem>
          <ListGroupItem>Foaming: {this.state.selectedOil.foaming || ''}</ListGroupItem>
          <ListGroupItem>Hardness: {this.state.selectedOil.hardness || ''}</ListGroupItem>
          <ListGroupItem>Iodine: {this.state.selectedOil.iodine || ''}</ListGroupItem>
          <ListGroupItem>INS: {this.state.selectedOil.INS || ''}</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default OilList;

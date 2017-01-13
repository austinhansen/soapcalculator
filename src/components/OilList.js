import React, { Component } from 'react';
import Oil from './Oil';
import { Button, FormGroup, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';

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
            <h4>A. Choose Oils</h4>
            <hr />
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
          <ListGroupItem>Cleansing: {this.state.selectedOil.cleansing || ''} (12 to 22)</ListGroupItem>
          <ListGroupItem>Conditioning: {this.state.selectedOil.conditioning || ''} (44 to 69)</ListGroupItem>
          <ListGroupItem>Creaminess: {this.state.selectedOil.creaminess || ''} (16 to 48)</ListGroupItem>
          <ListGroupItem>Foaming: {this.state.selectedOil.foaming || ''} (14 to 46)</ListGroupItem>
          <ListGroupItem>Hardness: {this.state.selectedOil.hardness || ''} (29 to 54)</ListGroupItem>
          <ListGroupItem>Iodine: {this.state.selectedOil.iodine || ''} (41 to 70)</ListGroupItem>
          <ListGroupItem>INS: {this.state.selectedOil.INS || ''} (136 to 165)</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default OilList;

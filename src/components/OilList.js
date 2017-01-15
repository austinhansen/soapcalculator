import React, { Component } from 'react';
import Oil from './Oil';
import { Button, FormGroup, FormControl, Table } from 'react-bootstrap';

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
              <option>Select Oil</option>
              {
                Object
                  .keys(this.props.oils)
                  .map(key => <Oil key={key} index={key} details={this.props.oils[key]}/>)
              }
            </FormControl>
          </FormGroup>
        </form>

        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Cleansing:</td>
              <td>{this.state.selectedOil.cleansing || ''}</td>
            </tr>
            <tr>
              <td>Conditioning:</td>
              <td>{this.state.selectedOil.conditioning || ''}</td>
            </tr>
            <tr>
              <td>Creaminess:</td>
              <td>{this.state.selectedOil.creaminess || ''}</td>
            </tr>
            <tr>
              <td>Foaming:</td>
              <td>{this.state.selectedOil.foaming || ''}</td>
            </tr>
            <tr>
              <td>Hardness:</td>
              <td>{this.state.selectedOil.hardness || ''}</td>
            </tr>
            <tr>
              <td>Iodine:</td>
              <td>{this.state.selectedOil.iodine || ''}</td>
            </tr>
            <tr>
              <td>INS:</td>
              <td>{this.state.selectedOil.INS || ''}</td>
            </tr>
          </tbody>
        </Table>

        <Button onClick={this.handleSubmit} bsStyle="primary" block >Add</Button>
      </div>
    );
  }
}

export default OilList;

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
              <option></option>
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
              <td>Cleansing (12 to 22):</td>
              <td>{this.state.selectedOil.cleansing || ''}</td>
            </tr>
            <tr>
              <td>Conditioning (44 to 69):</td>
              <td>{this.state.selectedOil.conditioning || ''}</td>
            </tr>
            <tr>
              <td>Creaminess (16 to 48):</td>
              <td>{this.state.selectedOil.creaminess || ''}</td>
            </tr>
            <tr>
              <td>Foaming (14 to 46):</td>
              <td>{this.state.selectedOil.foaming || ''}</td>
            </tr>
            <tr>
              <td>Hardness (29 to 54):</td>
              <td>{this.state.selectedOil.hardness || ''}</td>
            </tr>
            <tr>
              <td>Iodine (41 to 70):</td>
              <td>{this.state.selectedOil.iodine || ''}</td>
            </tr>
            <tr>
              <td>INS (136 to 165):</td>
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

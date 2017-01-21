import React, { Component } from 'react';
import { Button, FormGroup, Table } from 'react-bootstrap';
import Select from 'react-select';

class OilList extends Component {
  constructor() {
    super();
    this.state = {selectedOil: {name: ''}};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (option) =>  {
    const oils = this.props.oils;
    const key = option.value;
    const oil = oils[key];
    oil["key"] = key;

    if(oil) {
      this.setState({selectedOil: oil});
    };
  }

  handleSubmit() {
    this.props.addToSoap(this.state.selectedOil.key);
  }

  render() {
    const options =
      Object
        .keys(this.props.oils)
        .map(key => ({"value": key, "label": this.props.oils[key].name}));

    return (
      <div>
        <form>
          <FormGroup>
            <h4>A. Add Your Oils</h4>
            <hr />

            <Select options={options} onChange={this.handleChange} value={this.state.selectedOil.key} clearable={false} />
          </FormGroup>
        </form>

        <Button onClick={this.handleSubmit} bsStyle="primary" block >Add</Button>

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
      </div>
    );
  }
}

export default OilList;

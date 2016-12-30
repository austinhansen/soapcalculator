import React, { Component } from 'react';
import Oil from './Oil';

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
        <ul className="list-of-oils">
          <div className="form-group form-inline">
            <label>Select your oils</label>
            <select onChange={this.handleChange} className="form-control" >
              <option></option>
              {
                Object
                  .keys(this.props.oils)
                  .map(key => <Oil key={key} index={key} details={this.props.oils[key]}/>)
              }
            </select>
            <button onClick={this.handleSubmit} className="btn btn-success">Add</button>
          </div>
        </ul>

        <ul className="oil-properties">
          <li className="cleansing">Cleansing: <input type="text" disabled value={this.state.selectedOil.cleansing || ''} /></li>
          <li className="conditioning">Conditioning: <input type="text" disabled value={this.state.selectedOil.conditioning || ''} /></li>
          <li className="creaminess">Creaminess: <input type="text" disabled value={this.state.selectedOil.creaminess || ''} /></li>
          <li className="foaming">Foaming: <input type="text" disabled value={this.state.selectedOil.foaming || ''} /></li>
          <li className="hardness">Hardness: <input type="text" disabled value={this.state.selectedOil.hardness || ''} /></li>
          <li className="iodine">Iodine: <input type="text" disabled value={this.state.selectedOil.iodine || ''} /></li>
          <li className="INS">INS: <input type="text" disabled value={this.state.selectedOil.INS || ''} /></li>
        </ul>
      </div>
    );
  }
}

export default OilList;

import React, { Component } from 'react';
import Oil from './Oil';

class OilList extends Component {
  constructor() {
    super();
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) =>  {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    this.props.addToSoap(this.state.value);
  }

  render() {
    return (
      <div>
        <ul className="list-of-oils">
          <label>Select your oils</label>
          <div className="form-group form-inline">
            <select value={this.state.value} onChange={this.handleChange} className="form-control" >
              <option></option>
              {
                Object
                  .keys(this.props.oils)
                  .map(key => <Oil key={key} index={key} details={this.props.oils[key]}/>)
              }
            </select>
            <button onClick={this.handleSubmit}>Add</button>
          </div>
        </ul>
      </div>
    );
  }
}

export default OilList;

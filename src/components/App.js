import React, { Component } from 'react';
import OilList from './OilList';
import Soap from './Soap';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      oils: {},
      soap: {}
    };

    this.addToSoap = this.addToSoap.bind(this);
    this.removeFromSoap = this.removeFromSoap.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`soap`, JSON.stringify(nextState.soap));
  }

  componentWillMount() {
    const oilsJSON = require('../oils.json');
    this.setState({
      oils: oilsJSON
    });

    const localStorageRef = localStorage.getItem(`soap`);

    if(localStorageRef) {
      this.setState({
        soap: JSON.parse(localStorageRef)
      });
    }
  }

  addToSoap(key) {
    const soap = {...this.state.soap};
    soap[key] = this.state.oils[key];
    this.setState({ soap });
  }

  removeFromSoap(key) {
    const soap = {...this.state.soap};
    delete soap[key];
    this.setState({ soap });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-xs-2 col-md-2">
              <label>Weight</label>
              <div className="form-group">
                <input type="number" className="form-control" name="weight" placeholder="Grams" />
              </div>

              <label>Water Percentage</label>
              <div className="form-group">
                <input type="number" className="form-control" name="water-percentage" />
              </div>

              <label>Super Fat %</label>
              <div className="form-group">
                <input type="number" className="form-control" name="fat" defaultValue={5} />
              </div>
            </div>

            <div className="col-md-4">
              <OilList oils={this.state.oils} addToSoap={this.addToSoap} />
            </div>

            <div className="col-md-6">
              <Soap soap={this.state.soap} removeFromSoap={this.removeFromSoap} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

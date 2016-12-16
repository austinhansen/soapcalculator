import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <label> Weight
          <input type="number" name="weight"  placeholder="grams" />
        </label>
        <label> Water Percentage
          <input type="number" name="water-percentage" />
        </label>
        <label> Super Fat %
          <input type="number" name="fat" defaultValue={5} />
        </label>
      </div>
    );
  }
}

export default App;

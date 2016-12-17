import React, { Component } from 'react';
import OilList from './OilList';
import Soap from './Soap';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor() {
    super();

    // getinitialState
    this.state = {
      oils: {},
      ingredients: {}
    };

    this.addToIngredients = this.addToIngredients.bind(this);
    this.removeFromIngredients = this.removeFromIngredients.bind(this);
  }

  componentWillMount() {
    const oilsJSON = require('../oils.json');
    this.setState({
      oils: oilsJSON
    });
  }

  addToIngredients(event) {
    const ingredients = {...this.state.ingredients};
    const key = event.target.value;

    ingredients[key] = this.state.oils[key];

    this.setState({ ingredients });
  }

  removeFromIngredients(key) {
    const ingredients = {...this.state.ingredients};
    delete ingredients[key];
    this.setState({ ingredients });
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

            <div className="col-md-3">
              <OilList oils={this.state.oils} addToIngredients={this.addToIngredients} />
            </div>

            <div className="col-md-7">
              <Soap ingredients={this.state.ingredients} removeFromIngredients={this.removeFromIngredients} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

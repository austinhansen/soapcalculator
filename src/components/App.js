import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Banner from './Banner';
import OilList from './OilList';
import Soap from './Soap';
import Recipe from './Recipe';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      oils: {},
      soap: {},
      recipe: {},
      weight: ''
    };

    this.addToSoap = this.addToSoap.bind(this);
    this.removeFromSoap = this.removeFromSoap.bind(this);
    this.updateWeight = this.updateWeight.bind(this);
    this.updateIngredientPercentage = this.updateIngredientPercentage.bind(this);
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

  updateWeight = (event) =>  {
    const recipe = {...this.state.recipe};
    const soap = {...this.state.soap};
    const weight = this.state.weight;
    const recipeIds = Object.keys(recipe)

    const updatedRecipe = recipeIds.reduce((prevObject, key) => {
      const percentage = soap[key].value;
      prevObject[key] = percentage * weight / 100 || 0;
      return prevObject;
    }, {});

    this.setState({
      weight: event.target.value,
      recipe: updatedRecipe
    });
  }

  updateIngredientPercentage(key, value) {
    const soap = {...this.state.soap};
    const percentage = value >= 0 ? value : 0;
    soap[key]['value'] = percentage;

    const recipe = {...this.state.recipe};
    const weight = this.state.weight;
    recipe[key] = percentage * weight / 100 || 0;

    this.setState({
      soap: soap,
      recipe: recipe
    });
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
      <div>
        <Banner />
        <Grid>
          <Row className="show-grid">
            <Col xs={3}>
              <FormGroup>
                <ControlLabel>Weight</ControlLabel>
                <InputGroup>
                  <FormControl onChange={this.updateWeight} type="number" />
                  <InputGroup.Addon>g</InputGroup.Addon>
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <ControlLabel>Water</ControlLabel>
                <InputGroup>
                  <FormControl type="number" />
                  <InputGroup.Addon>%</InputGroup.Addon>
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <ControlLabel>Super Fat</ControlLabel>
                <InputGroup>
                  <FormControl type="number" />
                  <InputGroup.Addon>%</InputGroup.Addon>
                </InputGroup>
              </FormGroup>
            </Col>

            <Col xs={3}>
              <OilList oils={this.state.oils} addToSoap={this.addToSoap} />
            </Col>

            <Col xs={6}>
              <Soap soap={this.state.soap} weight={this.state.weight} removeFromSoap={this.removeFromSoap} updateIngredientPercentage={this.updateIngredientPercentage} />
            </Col>
          </Row>
          <Row>
            <Recipe soap={this.state.soap} recipe={this.state.recipe} oils={this.state.oils} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

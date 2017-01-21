import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Banner from './Banner';
import OilList from './OilList';
import Soap from './Soap';
import Weight from './Weight';
import Recipe from './Recipe';
import SoapProperties from './SoapProperties';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-select/dist/react-select.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      oils: {},
      soap: {},
      weight: ''
    };

    this.addToSoap = this.addToSoap.bind(this);
    this.removeFromSoap = this.removeFromSoap.bind(this);
    this.updateWeight = this.updateWeight.bind(this);
    this.updateIngredientPercentage = this.updateIngredientPercentage.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`soap`, JSON.stringify(nextState.soap));
    localStorage.setItem(`weight`, JSON.stringify(nextState.weight));
  }

  componentWillMount() {
    const oilsJSON = require('../oils.json');
    this.setState({
      oils: oilsJSON
    });

    const localStorageSoap = localStorage.getItem(`soap`);
    const localStorageWeight = localStorage.getItem(`weight`);

    if(localStorageSoap) {
      this.setState({
        soap: JSON.parse(localStorageSoap)
      });
    }

    if(localStorageWeight) {
      this.setState({
        weight: JSON.parse(localStorageWeight)
      });
    }
  }

  updateWeight = (event) =>  {
    const weight = event.target.value;

    this.setState({
      weight: weight
    });
  }

  updateIngredientPercentage(key, value) {
    const soap = this.state.soap;
    const percentage = value >= 0 ? value : 0;
    soap[key]['value'] = percentage;

    this.setState({
      soap: soap
    });
  }

  addToSoap(key) {
    if(key) {
      const soap = {...this.state.soap};
      soap[key] = this.state.oils[key];
      this.setState({ soap });
    }
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
            <Weight weight={this.state.weight} updateWeight={this.updateWeight} type="number" alt="Soap Weight" />
          </Row>

          <hr />

          <h2>Step 2: Soap Composition</h2>
          <Row className="show-grid">
            <Col sm={4}>
              <OilList oils={this.state.oils} addToSoap={this.addToSoap} />
            </Col>

            <Col sm={4}>
              <Soap soap={this.state.soap} weight={this.state.weight} removeFromSoap={this.removeFromSoap} updateIngredientPercentage={this.updateIngredientPercentage} />
            </Col>

            <Col sm={4}>
              <SoapProperties soap={this.state.soap} />
            </Col>
          </Row>

          <hr />

          <Row>
            <Col sm={6}>
              <h2>Step 3: Your Soap Recipe</h2>
              <Recipe soap={this.state.soap} weight={this.state.weight} oils={this.state.oils} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

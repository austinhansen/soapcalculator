import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Banner from './Banner';
import OilList from './OilList';
import Soap from './Soap';
import Weight from './Weight';
import Recipe from './Recipe';
import OptionalProperties from './OptionalProperties';
import SoapProperties from './SoapProperties';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-select/dist/react-select.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      oils: {},
      soap: {
        ingredients: {},
        superFat: 5,
        waterPercentage: 30,
        weight: 794
      },
      selectedMass: {
        type: "g",
        conversion: 1
      }
    };

    this.addToSoap = this.addToSoap.bind(this);
    this.removeFromSoap = this.removeFromSoap.bind(this);
    this.updateWeight = this.updateWeight.bind(this);
    this.updateIngredientPercentage = this.updateIngredientPercentage.bind(this);
    this.updateWaterPercentage = this.updateWaterPercentage.bind(this);
    this.updateSelectedMass = this.updateSelectedMass.bind(this);
    this.updateSuperFat = this.updateSuperFat.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`soap`, JSON.stringify(nextState.soap));
    localStorage.setItem(`selectedMass`, JSON.stringify(nextState.selectedMass));
  }

  componentWillMount() {
    const oilsJSON = require('../oils.json');
    this.setState({
      oils: oilsJSON
    });

    const localStorageSoap = localStorage.getItem(`soap`);
    const localStorageSelectedMass = localStorage.getItem(`selectedMass`);

    if(localStorageSoap) {
      const soap = JSON.parse(localStorageSoap);
      if (soap.ingredients && soap.superFat && soap.waterPercentage && soap.weight) {
        this.setState({
          soap: soap
        });
      }
    }

    if(localStorageSelectedMass) {
      this.setState({
        selectedMass: JSON.parse(localStorageSelectedMass)
      });
    }
  }

  updateWeight = (event) =>  {
    let newSoap = this.state.soap;
    const weight = event.target.value;
    const newWeight = weight >= 0 ? weight : 0;
    newSoap.weight = newWeight;

    this.setState({soap: newSoap});
  }

  updateSelectedMass = (massType, conversion) =>  {
    let newSelectedMass = this.state.selectedMass;
    let newSoap = this.state.soap;

    if (massType === "g") {
      newSoap.weight = Math.round(newSoap.weight / 0.035274);
    } else {
      newSoap.weight = Math.round(newSoap.weight * 0.035274);
    }
    newSelectedMass.type = massType;
    newSelectedMass.conversion = conversion;

    this.setState({
      selectedMass: newSelectedMass,
      soap: newSoap
    });
  }

  updateIngredientPercentage(key, value) {
    const soap = this.state.soap;
    const percentage = value >= 0 ? value : 0;
    soap.ingredients[key]['value'] = percentage;

    this.setState({
      soap: soap
    });
  }

  updateWaterPercentage(value) {
    const soap = this.state.soap;
    const percentage = value >= 0 ? value : 0;
    soap.waterPercentage = percentage;

    this.setState({
      soap: soap
    });
  }

  updateSuperFat(superFatValue) {
    const soap = this.state.soap;
    soap.superFat = superFatValue;
    this.setState({ soap });
  }

  addToSoap(key) {
    if(key) {
      const soap = this.state.soap;
      let ingredient = this.state.oils[key];
      ingredient.value = "0";
      soap.ingredients[key] = ingredient;
      this.setState({ soap });
    }
  }

  removeFromSoap(key) {
    const soap = this.state.soap;
    delete soap.ingredients[key];
    this.setState({ soap });
  }

  render() {
    return (
      <div>
        <Banner />
        <Grid>
          <Row className="show-grid">
            <Weight weight={this.state.soap.weight} updateWeight={this.updateWeight} selectedMass={this.state.selectedMass} updateSelectedMass={this.updateSelectedMass} type="number" alt="Soap Weight" />
          </Row>

          <Row className="show-grid">
            <OptionalProperties soap={this.state.soap} updateWaterPercentage={this.updateWaterPercentage} updateSuperFat={this.updateSuperFat} />
          </Row>

          <hr />

          <h2>Step 2: Soap Composition</h2>
          <Row className="show-grid">
            <OilList oils={this.state.oils} addToSoap={this.addToSoap} />

            <Col sm={4}>
              <Soap soap={this.state.soap.ingredients} weight={this.state.soap.weight} removeFromSoap={this.removeFromSoap} updateIngredientPercentage={this.updateIngredientPercentage} />
            </Col>

          </Row>

          <hr />

          <h2>Step 3: Your Soap</h2>

          <Row>
            <Col sm={6}>
              <Recipe soap={this.state.soap} selectedMass={this.state.selectedMass} weight={this.state.soap.weight} oils={this.state.oils} />
            </Col>

            <Col sm={6}>
              <SoapProperties soap={this.state.soap.ingredients} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

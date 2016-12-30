import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';
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
        <Grid>
          <Row className="show-grid">
            <Col xs={2}>
              <FormGroup>
                <ControlLabel>Weight</ControlLabel>
                <InputGroup>
                  <FormControl type="number" />
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

            <Col xs={7}>
              <Soap soap={this.state.soap} removeFromSoap={this.removeFromSoap} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

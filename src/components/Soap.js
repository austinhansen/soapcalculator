import React, { Component } from "react";
import Ingredient from "./Ingredient";
import { ControlLabel, Form, InputGroup, FormGroup, FormControl } from "react-bootstrap";
import CSSTransitionGroup from "react-addons-css-transition-group";

class Soap extends Component {
  render() {
    const soapIds = Object.keys(this.props.soap);
    const total = soapIds.reduce((prevTotal, key) => {
      const percentage = parseInt(this.props.soap[key]["value"], 10);
      return prevTotal + (percentage || 0);
    }, 0);

    return (
      <div>
        <h4>B. Choose Oil Percentages</h4>
        <hr />
        <FormGroup>
          <CSSTransitionGroup
            component="span"
            className="ingredient"
            transitionName="ingredient"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            {
              Object
                .keys(this.props.soap)
                .map(key => <Ingredient
                  key={key}
                  index={key}
                  details={this.props.soap[key]}
                  removeFromSoap={this.props.removeFromSoap}
                  updateIngredientPercentage={this.props.updateIngredientPercentage}
                />)
            }
          </CSSTransitionGroup>
        </FormGroup>
        <Form inline>
          <FormGroup>
            <ControlLabel>Total:</ControlLabel>
            {" "}
            <InputGroup>
              <FormControl type="number" value={total} readOnly />
              <InputGroup.Addon>%</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
       </Form>
      </div>
    );
  }
}

export default Soap;

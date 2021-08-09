import React, { Component } from "react";
import Display from "./Display";
import "../App.css";
import ButtonPanel from "./ButtonPanel";
// eslint-disable-next-line no-unused-vars
import calculate from "../logic/calculate";

class App extends Component {
  constructor() {
    super();

    this.state = {
      total: null,
      next: null,
      operation: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const {
      total: totalState,
      next: nextState,
      operation: operationState
    } = this.state;
    const { total, next, operation } = calculate(
      { total: totalState, next: nextState, operation: operationState },
      buttonName
    );
    this.setState({
      total,
      next,
      operation
    });
  }

  render() {
    const { next } = this.state;
    return (
      <>
        <Display next={next || 0} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
export default App;

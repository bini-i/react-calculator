import React, { Component } from "react";
import Display from "./Display";
import "../App.css";
import ButtonPanel from "./ButtonPanel";
// eslint-disable-next-line no-unused-vars
import calculate from "../logic/calculate";

// function App() {
//   return (
//     <>
//       <Display />
//       <ButtonPanel />
//     </>
//   );
// }

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
    const { totalState, nextState } = this.state;
    const { total, next } = calculate(
      { total: totalState, next: nextState },
      buttonName
    );
    this.setState({
      total,
      next
    });
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <Display total={total} />
        <ButtonPanel onClick={this.handleClick} />
      </>
    );
  }
}
export default App;

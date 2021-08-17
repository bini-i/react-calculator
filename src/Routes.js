import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import App from "./components/App";
import Quote from "./components/Quote";

const Routes = () => (
  <BrowserRouter>
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>Math Magicians</h1>
      <ul style={{ display: "flex", alignItems: "center", listStyle: "none" }}>
        <Link to="/">
          <li>Home </li>
        </Link>
        <Link to="/calculator">
          <li>Calculator </li>
        </Link>
        <Link to="quote">
          <li>Quote </li>
        </Link>
      </ul>
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calculator" component={App} />
      <Route exact path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

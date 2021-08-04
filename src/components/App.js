import React from "react";
import Display from "./Display";
import "../App.css";
import ButtonPanel from "./ButtonPanel";
// eslint-disable-next-line no-unused-vars
import calculate from "../logic/calculate";

function App() {
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
}

export default App;

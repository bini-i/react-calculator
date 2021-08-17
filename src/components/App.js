import React, { useState } from "react";
import Display from "./Display";
import "../App.css";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    const {
      total: totalCalculated,
      next: nextCalculated,
      operation: operationCalculated
    } = calculate({ total, next, operation }, buttonName);
    setTotal(totalCalculated);
    setNext(nextCalculated);
    setOperation(operationCalculated);
  };

  return (
    <>
      <Display next={next || 0} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;

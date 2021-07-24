import Big from "big.js";

function operate(numberOne, numberTwo, operation) {
  let result = 0;
  if (operation === "+") {
    result = Big(numberOne) + Big(numberTwo);
  }
  if (operation === "-") {
    result = Big(numberOne) - Big(numberTwo);
  }
  if (operation === "x") {
    result = Big(numberOne) * Big(numberTwo);
  }
  if (operation === "÷") {
    result = Big(numberOne) / Big(numberTwo);
  }
  if (operation === "%") {
    result = Big();
  }

  return result;
}

export default operate;

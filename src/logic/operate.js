import Big from "big.js";

function operate(numberOne, numberTwo, operation) {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let result = 0;
  if (operation === "+") {
    result = num1.plus(num2);
  }
  if (operation === "-") {
    result = num1.minus(num2);
  }
  if (operation === "x") {
    result = num1.times(num2);
  }
  if (operation === "÷") {
    if (numberTwo === 0) return "Error: Division by zero";
    result = num1.div(num2);
  }
  if (operation === "%") {
    result = num1.mod(num2);
  }
  return result.toNumber();
}

export default operate;

import operate from "./operate";

function calculate(calculator, btnName) {
  /*
        calculator {
            total: (result of all operations until current moment)
            next: (next text to be displayed)
            operation: (currently running operation)
        }
    */

  let { total } = calculator;
  const { next, operation } = calculator;
  if (btnName === "+/-") {
    total = operate(total, next, "+");
  } else if (
    btnName === "+" ||
    btnName === "-" ||
    btnName === "x" ||
    btnName === "÷" ||
    btnName === "%"
  ) {
    total = operate(total, next, operation);
  } else if (btnName === "=") {
    total = operate(total, next, "+");
  }

  return { total, next };
}

export default calculate;

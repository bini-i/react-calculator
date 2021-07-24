import operate from "./operate";

function calculate(calculator, btnName) {
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

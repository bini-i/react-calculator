import operate from "./operate";

function calculate(calculator, btnName) {
  let { total, next, operation } = calculator;
  if (btnName === "AC") {
    total = null;
    next = null;
  } else if (btnName === "+/-") {
    total = operate(total, next, "-");
  } else if (
    btnName === "+" ||
    btnName === "-" ||
    btnName === "x" ||
    btnName === "÷" ||
    btnName === "%"
  ) {
    operation = btnName;
  } else if (btnName === "=") {
    total = operate(total, next, "+");
  } else if (!operation) {
    next = next * 10 + parseInt(btnName, 10);
  } else {
    total = operate(next, parseInt(btnName, 10), operation);
  }

  return { total, next, operation };
}

export default calculate;

// 5 + 2

// total = null
// next = null
// operation = null

// 5
// total = null
// next = 5
// operation = null

// +
// total = null
// next = 5
// operation = +

// 2
// total = null

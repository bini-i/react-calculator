import operate from "./operate";

function calculate(calculator, btnName) {
  let { total, next, operation } = calculator;
  if (btnName === "AC") {
    total = null;
    next = null;
    operation = null;
  } else if (btnName === "+/-") {
    total = operate(total || 0, -1, "x");
    next = operate(next || 0, -1, "x");
  } else if (
    btnName === "+" ||
    btnName === "-" ||
    btnName === "x" ||
    btnName === "÷" ||
    btnName === "%"
  ) {
    operation = btnName;
  } else if (btnName === "=") {
    total = operate(total, next, operation);
    operation = null;
    next = total;
  } else {
    if (operation && next) {
      if (!total) {
        total = next;
        next = null;
      }
    }
    next = next * 10 + parseInt(btnName, 10);
  }

  return { total, next, operation };
}

export default calculate;

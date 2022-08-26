function operate(operator, num1, num2) {
  const operations = {
    "/": () => num1 / num2,
    "*": () => num1 * num2,
    "-": () => num1 - num2,
    "+": () => num1 + num2,
  };

  const result = operations[operator]();
  resetDisplay(result);
}

function setupButtons() {
  const numberButtons = document.querySelectorAll(".number");
  numberButtons.forEach((button) =>
    button.addEventListener("click", (event) =>
      updateDisplay(event.target.value)
    )
  );

  const operationButtons = document.querySelectorAll(".operation");
  operationButtons.forEach((button) =>
    button.addEventListener("click", collect)
  );

  const clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", reset);
}

function collect() {
  let displayNumber;

  if (display.textContent === "") {
    displayNumber = 0;
  } else {
    displayNumber = parseFloat(display.textContent);
  }

  if (!firstOperand) {
    firstOperand = displayNumber;
    resetDisplay();
  } else {
    secondOperand = displayNumber;
    resetDisplay();
  }

  const op = this.value;
  if (op === "=") {
    operate(operator, firstOperand, secondOperand);
  } else {
    operator = this.value;
  }
}

function updateDisplay(text) {
  display.textContent += text;
}

function resetDisplay(text = "") {
  display.textContent = text;
}

function reset() {
  firstOperand = null;
  secondOperand = null;
  operator = null;
  resetDisplay();
}

let firstOperand;
let secondOperand;
let operator;
const display = document.querySelector("#display");
setupButtons();

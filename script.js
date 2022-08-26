function operate(operator, num1, num2) {
  const operations = {
    "/": () => num1 / num2,
    "*": () => num1 * num2,
    "-": () => num1 - num2,
    "+": () => num1 + num2,
  };

  const result = operations[operator]();
  console.log(result);
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
  const displayNumber = parseFloat(displayText);
  if (!firstOperand) {
    firstOperand = displayNumber;
    resetDisplay();
  } else {
    secondOperand = displayNumber;
    resetDisplay();
  }

  operator = this.value;
}

function updateDisplay(text) {
  display.textContent += text;
}

function resetDisplay() {
  display.textContent = "";
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

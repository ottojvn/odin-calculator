function operate(operator, firstOperand, secondOperand) {
  const validOperators = {
    "/": () => firstOperand / secondOperand,
    "*": () => firstOperand * secondOperand,
    "-": () => firstOperand - secondOperand,
    "+": () => firstOperand + secondOperand,
  };

  const operation = validOperators[operator];

  if (!operation) {
    return null;
  }

  return operation();
}


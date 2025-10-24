function add(num1, num2) {
  return num1 + num2;
};

function subtract(num1, num2) {
	return num1 - num2;
};

function multiply(num1, num2) {
  return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
}

let operand1;
let operator;
let operand2;

function operate(operand1, operator, operand2) {
  return operator(operand1, operand2);
}
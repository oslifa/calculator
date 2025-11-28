function add(num1, num2) {
    return Math.round(10000000000 * (num1 + num2)) / 10000000000;
};

function subtract(num1, num2) {
    return Math.round(10000000000 * (num1 - num2)) / 10000000000;
};

function multiply(num1, num2) {
    return Math.round(10000000000 * (num1 * num2)) / 10000000000;
};

function divide(num1, num2) {
    if (num2 == 0) {
        return "X__X";
    }
    return Math.round(10000000000 * (num1 / num2)) / 10000000000;
}

function operate(operand1, operator, operand2) {
    switch (operator) {
        case "+":
            return add(operand1, operand2);
        case "-":
            return subtract(operand1, operand2);
        case "×":
            return multiply(operand1, operand2);
        case "÷":
            return divide(operand1, operand2);
    }
}

let operation = ["", "", "", ""];
let operandIndex = 0;
let result = "";

function handleOperand(digit) {
    operation[3] = "";

    if (operation[1]) {
        operandIndex = 2;
    } else {
        operandIndex = 0;
    }

    if ("01234567890".includes(digit) || !operation[operandIndex].includes(".")) {
        operation[operandIndex] += digit;
    }

    updateDisplay();
}

function handleOperator(operator) {
    if (parseFloat(operation[3])) {
        result = operation[3];
        operation = [result, operator, "", ""];
    } else if (operation[2]) {
        result = operate(parseFloat(operation[0]), operation[1], parseFloat(operation[2]));
        operation = [result, operator, "", ""];
    } else if (operation[0]) {
        operation[1] = operator;
    }

    updateDisplay();
}

function equals() {
    result = operate(parseFloat(operation[0]), operation[1], parseFloat(operation[2]));
    operation = ["", "", "", result];
    
    updateDisplay();
}

const calculator = document.querySelector("#calculator");
const display = document.querySelector("#display");

function updateDisplay() {
    display.textContent = operation.join("");
}

function clearDisplay() {
    operation = ["", "", "", ""];
    display.textContent = "";
}

calculator.addEventListener("click", (e) => {
    if (e.target.classList.contains("digit")) {
        handleOperand(e.target.textContent);
    } else if (e.target.classList.contains("operator")) {
        handleOperator(e.target.id);
    } else if (e.target.id === "equals") {
        equals();
    } else if (e.target.id === "ac") {
        clearDisplay();
    }
})
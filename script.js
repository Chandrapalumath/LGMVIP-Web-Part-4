let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let firstOperand = '';

function clearDisplay() {
    display.textContent = '0';
    currentInput = '';
    currentOperator = '';
    firstOperand = '';
}

function deleteLast() {
    if (currentInput !== '') {
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || '0';
    }
}

function appendNumber(number) {
    currentInput += number;
    display.textContent = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '' && firstOperand !== '') {
        currentOperator = operator;
    } else if (currentInput !== '') {
        if (firstOperand === '') {
            firstOperand = currentInput;
        } else {
            firstOperand = calculate(firstOperand, currentOperator, currentInput);
        }
        currentOperator = operator;
        currentInput = '';
        display.textContent = firstOperand;
    }
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.textContent = currentInput;
    }
}

function calculateResult() {
    if (currentInput !== '' && currentOperator !== '' && firstOperand !== '') {
        display.textContent = calculate(firstOperand, currentOperator, currentInput);
        currentInput = display.textContent;
        currentOperator = '';
        firstOperand = '';
    }
}

function calculate(a, operator, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
}

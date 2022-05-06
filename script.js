const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelector('.equate');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const decimalButton = document.querySelector('.decimal');
const inputDisplay = document.querySelector('.input');
const outputDisplay = document.querySelector('.output');

let firstOperand = '';
let secondOperand = '';
let currentOpertion = null;
let resetScreen = false;

numberButtons.forEach((button) => button.addEventListener('click', () => appendNumber(button.textContent)))
operatorButtons.forEach((button) => button.addEventListener('click', () => setCurrentOperation(button.textContent)))
clearButton.addEventListener('click', () => clear())
deleteButton.addEventListener('click', () => deleteNumber())
decimalButton.addEventListener('click', () => appendDecimal())
equalButton.addEventListener('click', () => evaluate())
//window.addEventListener('keydown', );

function appendNumber(e) {
    // if inputDisplay is 0 or resetScreen is true
    if (inputDisplay.textContent === '0' || resetScreen) {
        shouldResetScreen();
    }
    inputDisplay.textContent += e;
}

function shouldResetScreen() {
    inputDisplay.textContent = '';
    resetScreen = false;
}

function clear() {
    inputDisplay.textContent = '0';
    outputDisplay.textContent = '';
    firstOperand = '';
    lastOperand = '';
    currentOpertion = null;
}


function deleteNumber (){
    inputDisplay.textContent = inputDisplay.textContent.toString().slice(0,-1);
}

function appendDecimal() {
    if (resetScreen) shouldResetScreen();
    if (inputDisplay.textContent === '')
        inputDisplay.textContent = '0';
    if (inputDisplay.textContent.includes('.')) return;
    inputDisplay.textContent += '.';
}

function setCurrentOperation(e) {
    if (currentOpertion !== null) evaluate();
    currentOpertion = e;
    firstOperand = parseFloat(inputDisplay.textContent);
    outputDisplay.textContent = `${firstOperand} ${currentOpertion} `;     
    console.log(e);
    resetScreen = true;
}

function evaluate() {
    if (currentOpertion === null || resetScreen) return;
    if (currentOpertion === '÷' && inputDisplay.textContent === '0') {
        alert('You cannon divide by zero.');
        return
    }
    secondOperand = parseFloat(inputDisplay.textContent);
    inputDisplay.textContent = roundResult(operate(currentOpertion, firstOperand, secondOperand));
    outputDisplay.textContent = `${firstOperand} ${currentOpertion} ${secondOperand}`
    currentOpertion = null;
}

function roundResult(num) {
    return Math.round(num * 1000) / 1000;
}


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) =>  a / b;

const operate = (operator, a, b) => {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '×':
            return multiply(a, b);
        case '÷':
            (b === 0) ? null : divide(a, b);
        default:
            return null;
    }
};
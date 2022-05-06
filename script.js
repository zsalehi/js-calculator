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

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) => 
    button.addEventListener('click', () => setCurrentOperation(button.textContent))
)

clearButton.addEventListener('click', () => clear())
decimalButton.addEventListener('click', () => appendDecimal())

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

function appendDecimal() {
    if (resetScreen) shouldResetScreen();
    if (inputDisplay.textContent === '')
        inputDisplay.textContent = '0';
    if (inputDisplay.textContent.includes('.')) return;
    inputDisplay.textContent += '.';
}

function setCurrentOperation(e) {
    currentOpertion = e;
    firstOperand = parseFloat(inputDisplay.textContent);
    inputDisplay.textContent = '0';
    outputDisplay.textContent = `${firstOperand} ${currentOpertion} `;     
    console.log(e);

}



const add = (...nums) => {
    let result = nums.reduce((num1, num2) => num1 + num2);
    return result;
}

const subtract = (...nums) => {
    let result = nums.reduce((num1, num2) => num1 - num2);
    return result;
};

const multiply = (...nums) => {
    let result = nums.reduce((num1, num2) => num1 * num2);
    return result;
};

const divide = (...nums) => {
    let result = nums.reduce((num1, num2) => num1 / num2);
    return result;
};

const operate = (operator, ...nums) => {
    return operator(...nums);
};
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const inputDisplay = document.querySelector('.input');
const outputDisplay = document.querySelector('.output');

let firstOperand = '';
let secondOperand = '';
let currentOpertion = null;
let resetScreen = false;

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
)

function appendNumber(number) {
    inputDisplay.textContent += number
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
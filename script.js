const digits = document.querySelectorAll('.digit');
let valueOne = 0;
digits.forEach( digit => {
    digit.addEventListener('click', valueOne = digit.innerHTML)
});

console.log(valueOne);

const add = (...nums) => {
    let result = nums.reduce((num1, num2) => num1 + num2);
    return result;
};

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
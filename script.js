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
    
};
// Addition function
function add(a, b) {
    return a + b;
  }
  
  // Subtraction function
  function subtract(a, b) {
    return a - b;
  }
  
  // Multiplication function
  function multiply(a, b) {
    return a * b;
  }
  
  // Division function
  function divide(a, b) {
    return a / b;
  }
  
  // Exponentiation function
  function power(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  // Square root function
  function squareRoot(number) {
    return Math.sqrt(number);
  }
  
  // Absolute value function
  function absolute(number) {
    return Math.abs(number);
  }
  
  // Random number generator function
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

module.exports = getRandomNumber, absolute, squareRoot, power, divide, multiply, add, subtract;
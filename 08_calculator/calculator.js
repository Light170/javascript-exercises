const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {
  return array.reduce((total, num) => total + num, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current, 1);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

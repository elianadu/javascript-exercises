const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  sumVar = arr.reduce((sum, curr) => {
    return sum + curr;
  }, 0);
  return sumVar;
};

const multiply = function (arr) {
  multVar = arr.reduce((product, curr) => {
    return product * curr;
  }, 1);
  return multVar;
};

const power = function (a, b) {
  let product = 1;
  for (let i = 0; i < b; i++) {
    product *= a;
  }
  return product;
};

const factorial = function (a) {
  let product = 1;
  for (let i = a; i > 0; i--) {
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
  factorial,
};

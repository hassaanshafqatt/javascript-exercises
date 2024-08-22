const add = function (...args) {
  let res = 0;
  for (let i = 0; i < args.length; i++) {
    res += args[i];
  }
  return res;
};

const subtract = function (...args) {
  let res = args[0];
  for (let i = 1; i < args.length; i++) {
    res -= args[i];
  }
  return res;
};

const sum = function (arr) {
  let res = 0;
  arr.forEach((element) => {
    res += element;
  });
  return res;
};

const multiply = function (arr) {
  let res = 1;
  arr.forEach((element) => {
    res *= element;
  });
  return res;
};

const power = function (val1, val2) {
  return Math.pow(val1, val2);
};

const factorial = function (n) {
  if (n == 0) return 1;
  while (n > 0) {
    return n * factorial(n - 1);
  }
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

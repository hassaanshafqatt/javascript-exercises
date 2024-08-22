const leapYears = function (year) {
  isLeap = year % 4 == 0 ? true : false;
  isCentury = year % 100 == 0 ? true : false;
  if ((isLeap && !isCentury) || (isLeap && isCentury && year % 400 == 0)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;

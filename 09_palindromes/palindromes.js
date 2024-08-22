const palindromes = function (string) {
  string = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, "").toLowerCase();
  let res = string.split("");
  res.reverse();
  res = res.join("");
  if (res == string) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;

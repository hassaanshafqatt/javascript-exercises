const fibonacci = function (nth) {
  let count = 0;
  let arr = [];
  nth = parseInt(nth);
  if (nth == 0) return 0;
  if (nth < 0) return "OOPS";
  while (count <= nth) {
    if (count == 0 || count == 1) {
      arr.push(1);
    } else {
      arr.push(arr[count - 1] + arr[count - 2]);
    }
    count++;
  }

  return arr[nth - 1];
};

// Do not edit below this line
module.exports = fibonacci;

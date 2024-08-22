const reverseString = function(string) {
    let res = string.split('')
    res.reverse()
    res = res.join("")
    return res
};

// Do not edit below this line
module.exports = reverseString;

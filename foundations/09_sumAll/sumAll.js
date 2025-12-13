const sumAll = function(a, b) {
    function isBadParam(c) {
        return (c < 0) || (Number(c) !== c) || (Math.floor(c) !== c);
    }
    if (isBadParam(a) || isBadParam(b)) return "ERROR";
    let startVal = 0;
    let endVal = 0;
    let sum = 0;
    if (a < b) {
        startVal = a;
        endVal = b;
    }
    else {
        startVal = b;
        endVal = a;
    }
    for (let i = startVal; i <= endVal; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

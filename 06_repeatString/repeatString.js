const repeatString = function(word, num) {
    if (num < 0) return "ERROR";
    longString = "";
    while (num > 0) {
        longString += word;
        num--;
    }
    return longString;
};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function(word) {
    wordArr = word.split("");
    numLetters = wordArr.length;
    for (let i = 0; i <= Math.floor(numLetters / 2); i++) {
        [wordArr[i], wordArr[numLetters - i]] = [wordArr[numLetters - i], wordArr[i]];
    }
    return wordArr.join("");
};

// Do not edit below this line
module.exports = reverseString;

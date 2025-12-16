const palindromes = function (text) {
  textArr = text
    .split("")
    .filter(char => (new RegExp(/^[a-zA-Z0-9]$/)).test(char))
    .map((char) => char.toLowerCase());
  textLength = textArr.length;
  for (let i = 0; i <= Math.floor(textLength / 2); i++) {
    if (textArr[i] !== textArr[textLength - i - 1]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;

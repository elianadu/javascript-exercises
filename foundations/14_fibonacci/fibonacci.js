const fibonacci = function (index) {
  if (index < 0) {
    return "OOPS";
  }

  index = Number(index);

  if (index === 0) return 0;
  if (index === 1 || index === 2) return 1;
  prevNum0 = 1;
  prevNum1 = 1;
  thisNum = 2;

  for (let i = 3; i < index; i++) {
    [prevNum0, prevNum1, thisNum] = [prevNum1, thisNum, prevNum1 + thisNum];
  }
  return thisNum;
};

// Do not edit below this line
module.exports = fibonacci;

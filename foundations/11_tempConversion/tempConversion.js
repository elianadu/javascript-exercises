const convertToCelsius = function(tempInF) {
  result = (tempInF - 32) * 5 / 9;
  if (Number.isInteger(result)) return result;
  else return Number(result.toFixed(1));
};

const convertToFahrenheit = function(tempInC) {
  result = tempInC * 9 / 5 + 32;
  if (Number.isInteger(result)) return result;
  else return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

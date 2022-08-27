// [°F] = [°C] × 9/5 + 32	[°C] = ([°F] − 32) × 5/9

const ftoc = function(temp) {
  let celsius = (temp - 32) * 5 / 9;
  return parseFloat(celsius.toFixed(1));
};

const ctof = function(temp) {
  let fahrenheit = (temp * 9 / 5) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

/*
Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:

ftoc(32) // fahrenheit to celsius, should return 0

ctof(0) // celsius to fahrenheit, should return 32

Because we are human, we want the result temperature to be rounded to one decimal place: i.e., ftoc(100) should return 37.8 
and not 37.77777777777778.

This exercise asks you to create more than one function so the module.exports section of the spec file looks a 
little different this time. Nothing to worry about, we're just packaging both functions into a single object to be exported.
*/
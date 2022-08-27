const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(nums) {
	let total = 0
  for(num of nums){
    total += num;
  }
  return total;
};

const multiply = function(nums) {
	let total = 1
  for(num of nums){
    total *= num;
  }
  return total;
};

const power = function(num, exp) {
	return num**exp;
};

const factorial = function(num) {
  let total = 1
	if(num == 0){
    return 1;
  } else {
    for(let i = 1; i <= num; i++){
      total *= i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

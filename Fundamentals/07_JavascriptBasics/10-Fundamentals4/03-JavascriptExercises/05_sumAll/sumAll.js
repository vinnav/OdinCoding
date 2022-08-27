const sumAll = function(startInt, endInt) {
    let sum = 0

    if (startInt < 0 || endInt < 0 || typeof startInt != 'number' || typeof endInt != 'number'){
        return "ERROR";
    } else if (endInt < startInt){
        let temp = startInt;
        startInt = endInt;
        endInt = temp;
    }

    for (let i = startInt; i < endInt+1; i++){
        sum += startInt;
        startInt++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
const fibonacci = function(num) {

    if(num<0){
        return "OOPS";
    }

    let oldfibo = 0;
    let temp = 0
    let newfibo = 1;

    let i = 1;
    while(i<num){
        temp = newfibo;
        newfibo += oldfibo;
        oldfibo = temp;
        i++
    } 
    //console.log(newfibo)
    return newfibo;
};

// Do not edit below this line
module.exports = fibonacci;
// fibonacci(5)
/*
Create a function that returns a specific member of the Fibonacci sequence:

A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. 
The simplest is the series 1, 1, 2, 3, 5, 8, etc.

fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6) // returns 8
*/
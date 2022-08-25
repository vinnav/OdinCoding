**What are functions useful for?**
They allow you to store a piece of code that does a single task inside a defined block, and then call that code whenever you need it using a single short command — rather than having to type out the same code multiple times

**How do you invoke a function?**
myFunction();
myFunction(commaSeparatedParameters);

**What are anonymous functions?**
(function () {
  alert('hello');
})

**What is function scope?**
Variables defined inside the function are inside their own separate scope, meaning that they are locked away in their own separate compartments, unreachable from code outside the functions.
The top level outside all your functions is called the global scope. Values defined in the global scope are accessible from everywhere in the code.

**What are return values?**
the values that a function returns when it has completed

**What are arrow functions?**
let sum = (a, b) => a + b;

const doubled = originals.map((item) => item * 2);
    The map() method takes each item in the array in turn, passing it into the given function. It then takes the value returned by that function and adds it to a new array.

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};
alert( sum(1, 2) ); // 3
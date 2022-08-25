**What are the eight data types in JavaScript?**
Seven primitive data types:
--------------------------
*number* for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
*bigint* for integer numbers of arbitrary length.
*string* for strings. A string may have zero or more characters, there’s no separate single-character type.
*boolean* for true/false.
*null* for unknown values – a standalone type that has a single value null.
*undefined* for unassigned values – a standalone type that has a single value undefined.
*symbol* for unique identifiers.
And one non-primitive data type:
-------------------------------
*object* for more complex data structures.

**Which data type is NOT primitive?**
Object

**What is the relationship between null and undefined?**
Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things

**What is the difference between single, double, and backtick quotes for strings?**
None, as long as the starting and ending one matches, and it's not used inside the string or escaped

**What is the term for embedding variables/expressions in a string?**
Concatenating

**Which type of quote lets you embed variables/expressions in a string?**
backtick ` `

**How do you embed variables/expressions in a string?**
`My name is ${string}`

**How do you escape characters in a string?**
with \ as in "This is an \"escaped\" word"

**What is the difference between the slice/substring/substr string methods?**
slice() 
    extracts a part of a string and returns the extracted part in a new string.
    The method takes 2 parameters: the start position, and the end position (end not included).
substring() 
    is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().
substr() 
    is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.

**What are the three logical operators and what do they stand for?**
|| (OR), && (AND), ! (NOT)

**What are the comparison operators?**
Greater/less than
    a > b
Greater/less than or equals
    a >= b
Equals
    a == b
    the double equality sign == means the equality test, while a single one a = b means an assignment.
Not equals
    a != b, ! = 

**What are truthy and falsy values?**
Falsy values
    A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
Truthy values
    Other values become true, so they are called “truthy”.

**What are the falsy values in JavaScript?**
0, "", null, undefined, and NaN

**What are conditionals?**
if 
    to specify a block of code to be executed, if a specified condition is true
else 
    to specify a block of code to be executed, if the same condition is false
else if 
    to specify a new condition to test, if the first condition is false
switch 
    to specify many alternative blocks of code to be executed

**What is the syntax for an if/else conditional?**
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}

**What is the syntax for a switch statement?**
switch (expression) {
  case choice1:
    run this code
    break;
  case choice2:
    run this code instead
    break;
  // include as many cases as you like
  default:
    actually, just run this code
}

**What is the syntax for a ternary operator?**
condition ? run this code : run this code instead

**What is nesting?**
if (condition) {
  if (another condition) {
    // Code
  } else if (different condition) {
    // Different code
  }
}
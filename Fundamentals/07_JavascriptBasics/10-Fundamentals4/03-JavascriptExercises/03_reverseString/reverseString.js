const reverseString = function(text) {
    let textArray = text.split("");
    textArray.reverse();
    console.log(textArray.join(""))
    return textArray.join(""); 
};

reverseString("A car, a man, a maraca.")
// Do not edit below this line
module.exports = reverseString;

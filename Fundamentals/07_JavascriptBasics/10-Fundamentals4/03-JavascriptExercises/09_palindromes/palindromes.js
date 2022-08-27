const palindromes = function (text) {
    let simpleText = text.replace(/\s|,|\.|!/g, '').toLowerCase();
    let reverseText = simpleText.split("").reverse().join("");
    //let reverseText = reverseText.replace(/\s|,|\./g, '');
    //console.log(simpleText)
    //console.log(reverseText)
    if(simpleText == reverseText){
        return true;
    } else {
        return false;
    }
};

palindromes("A car, a man, a maraca.")
// Do not edit below this line
module.exports = palindromes;

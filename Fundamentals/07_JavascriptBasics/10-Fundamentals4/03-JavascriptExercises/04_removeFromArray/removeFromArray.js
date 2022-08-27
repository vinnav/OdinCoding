const removeFromArray = function(nums, ...remove) {
    const numsArray = Array.from(nums);
    for (arg of remove){
        for (let i = 0; i < numsArray.length; i++){
            if (numsArray[i] === arg) {
                numsArray.splice(i,1);
            }
        }    
    } 
    return numsArray;
    //console.log(numsArray);
    //console.log(remove)
};

//removeFromArray([1,2,3], 1, 2)

// Do not edit below this line
module.exports = removeFromArray;


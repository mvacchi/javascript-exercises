const removeFromArray = function(array, ...itemsToRemove) {
    const result = array.filter(item => !itemsToRemove.includes(item));
    return result;
};
console.log(removeFromArray([1,2,3,4], 3));
// Do not edit below this line
//module.exports = removeFromArray;

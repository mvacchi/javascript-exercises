const reverseString = function(word) {
    const arr = word.split("");
    arr.reverse();
    const reversed = arr.join("");
    console.log(reversed);
};
reverseString("hello there");
// Do not edit below this line
//module.exports = reverseString;

const repeatString = function(word, times) {
    if (times < 0) return 'ERROR';
    let string = "";
        for (let i = 0; i < 3; i++) {
        string += word;
}
return string;
};
//console.log(repeatString("hey",5));
// Do not edit below this line
module.exports = repeatString;

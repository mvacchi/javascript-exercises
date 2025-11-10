const sumAll = function(start, end) {
    let sum = 0;
    const min = Math.min(start, end);
    const max = Math.max(start, end);
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return "ERROR";
    }
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};
console.log(sumAll(4,-1));
// Do not edit below this line
//module.exports = sumAll;

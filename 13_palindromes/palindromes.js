const palindromes = function (str) {
    const cleanedStr = str
    .toLowerCase()
    .split('')
    .filter(char => /[a-z0-9]/i.test(char))
    .join('');
    
    const reversed = cleanedStr
    .split('')
    .reverse()
    .join('');

    return cleanedStr === reversed;
};

// Do not edit below this line
module.exports = palindromes;

const reverseString = function(str) {
    return str.split('').reverse().join('');
};

console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;

// Another approach could be to loop over the string in reverse direction to construct a new one
/*
  const reverseString = function (string) {
    let reversedString = "";

    for (let i = string.length -1; i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
  };
*/ 
const repeatString = function(str, num) {
    let message = ''
    if (num < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
        message += str;
        }
    }
    return message;
}


console.log(repeatString('hey', 3));
console.log(repeatString('yo', 2));
console.log(repeatString('hey', -1));

// Do not edit below this line
module.exports = repeatString;

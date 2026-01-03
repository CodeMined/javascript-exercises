function sumAll(num1, num2) {
    const sumArray = [];
    if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            sumArray.push(i);
        }
        return sumArray.reduce((sum, n) => sum + n);
    } else {
        for (let i = num1; i <= num2; i++) {
            sumArray.push(i);
        }
        return sumArray.reduce((sum, n) => sum + n);
    }
};

console.log(sumAll(1, 4));
console.log(sumAll(1, 6));
console.log(sumAll(4, 5));
// Do not edit below this line
module.exports = sumAll;

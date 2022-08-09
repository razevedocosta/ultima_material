// Test 1
// should sum 2 and 2 and the result must be 4
// module.exports.sum = (num1, num2) => {
//     return num1 + num2;
// }

// Test 2
// should sum 2 and 2 even if one number is a string
// module.exports.sum = (num1, num2) => {
//     return parseInt(num1,10) + parseInt(num2,10);
// }

// Test 3
// should throw an error if cannot be summed
module.exports.sum = (num1, num2) => {
    const int1 = parseInt(num1, 10);
    const int2 = parseInt(num2, 10);

    if (Number.isNaN(int1) || Number.isNaN(int2)) {
        throw new Error('Parameter invalid');
    }

    return int1 + int2;
}
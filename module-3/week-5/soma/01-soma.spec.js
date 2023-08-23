const {sum} = require('./01-soma');

it('should sum 2 and 2 and the result must be 4', () => {
    expect(sum(2,2)).toBe(4);
});

// it('should sum 2 and 2 even if one number is a string', () => {
//     expect(sum('2',2)).toBe(4);
// });

// it('should throw an error if cannot be summed', () => {
//     expect(() => {
//         sum('',2).toThrowError();
//     })

//     expect(() => {
//         sum()
//     }).toThrowError();
// });
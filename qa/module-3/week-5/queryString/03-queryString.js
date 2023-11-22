// Test 1
// should create a valid query string from an object
// module.exports.queryString = (obj) => {
//     const entries = Object.entries(obj).map(item => {
//         return `${item[0]}=${item[1]}`;
//     });

//     return entries.join('&');
// }

// Refatoração
// module.exports.queryString = (obj) =>
//     Object.entries(obj)
//     .map(([key, value]) => `${key}=${value}`)
//     .join('&');

// Test 3
module.exports.queryString = (obj) =>
    Object.entries(obj)
    .map(([key, value]) => {
        if (typeof value === 'object' && !Array.isArray(value)) {
            throw new Error('Check the params');
        }
        return `${key}=${value}`;
    })
    .join('&');
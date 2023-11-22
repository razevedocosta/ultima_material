// Filter
// Retorna um array contendo um subconjunto de elementos do array principal

let a = [5, 4, 3, 2, 1];

// let aFiltered = a.filter(x => x < 3);
let b = a.filter((x, i) => i % 2 == 0);

console.log(a);
console.log(b);
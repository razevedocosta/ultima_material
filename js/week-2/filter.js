// Filter
// Retorna um arry contendo um subconjunto de elementos de um array principal

let a = [5, 4, 3, 2, 1];

let aFiltered = a.filter(x => x < 3);
let b = a.filter((x, i) => i % 2 == 0);

console.log(b);
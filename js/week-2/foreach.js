// Foreach
// percorre todos os itens de um array
let data = [1, 2, 3, 4, 5];
let sum = 0;

// data.forEach(valor => {
//     sum = sum + valor;
// });

data.forEach(function(valor, i, a) {
    a[i] = valor + 1;
});

console.log(data);
// console.log(sum);
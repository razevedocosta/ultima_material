/* Map
   Permite uma operação de transformação/alteração nos itens de um array e ao final 
   gera uma nova lista com a mesma quantidade de itens originais.
*/

let a = [1, 2, 3];

const b = a.map(x => x*x);

console.log(b);


const nomes = ['João', 'Ana', 'Maria', 'Rodrigo'];

const retornoMap = nomes.map((nomeAtual) => {
    console.log(nomeAtual);
    return nomeAtual.toUpperCase();
});

// console.log(retornoMap);
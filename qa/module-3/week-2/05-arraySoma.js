const notas = [7, 8, 9, 10, 6.5, 10, 9, 10, 7, 0, 5, 7, 10, 3, 9, 7.5];
let i = 0;      // índice para acessar um elemento do array
let cont = 0;   // contador de notas acima de média
let soma = 0;   // variável para receber a soma das notas
let media;      // variável para armazenar a média aritmética
let tam = notas.length;     // total de elementos do array

while (i < tam) {
    soma = (soma + notas[i]); 
    media = soma/tam;         
    i = i + 1;

    if (notas[i] > 7)
        cont++;
}

console.log(`Média: ${media}`);
console.log(`Você teve ${cont} notas acima de 7`);
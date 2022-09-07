const notas = [7, 8, 5, 10, 6.5, 10, 9, 1, 7];
let i = 0;
let soma = 0;
let media;

while (i < notas.length) {
    soma = (soma + notas[i]);
    media = soma/(notas.length);
    i = i + 1;
}

console.log(`Média: ${media}`);
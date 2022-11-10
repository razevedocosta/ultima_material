const notas = [7, 8, 9, 10, 6.5, 10, 9, 10, 7];
let i = 0;
let cont = 0;
let soma = 0;
let media;
let tam = notas.length;

while (i < tam) {
    soma = (soma + notas[i]);
    media = soma/tam;
    i = i + 1;

    if (notas[i] > 7)
        cont++;
}

console.log(`Média: ${media}`);
console.log(`Você teve ${cont} notas acima da média`);
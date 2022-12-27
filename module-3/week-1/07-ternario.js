const nome = "Rodrigo";
const idade = 17;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`

// if (idade >= 18) {
//     console.log(`${nome} diz: "por favor, quero beber ${bebidaMaior}`);
// } else {
//     console.log(`${nome} diz: "por favor, quero beber ${bebidaMenor}`);
// }

console.log(pedido);

// let nota1 = 6;
// let nota2 = 10;

// const media = (nota1 + nota2) / 2;

// console.log(media > 7 ? `Média ${media}. Aprovado` : `Média ${media}. Reprovado`);
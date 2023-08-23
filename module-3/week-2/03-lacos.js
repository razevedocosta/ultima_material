// Laço de repetição: WHILE

let nome = 'Elias';
let cont = 1;

// while (cont < 1) {           // condição para verificar    10 < 11 ? V
//     console.log(cont + nome); // execução do código         10 Elias
//     cont = cont + 1;          // incremento da variável     10 + 1
// }

// do {
//     console.log(cont + nome);
//     cont = cont + 1;
// } while (cont < 1)

// inicialização; condição; incremento
for (cont=1; cont<10; cont++) {
    console.log(cont + nome); 
}

console.log("\nFim do laço de repetição!");
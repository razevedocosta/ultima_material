// código para verificar a idade de uma pessoa
// e saber se ela pode votar ou não

// leitura dos dados
let idade = 71;

if (idade < 16) {  // SE A IDADE FOI MAIOR OU IGUAL A 16 ENTÃO EXECUTA A LINHA 8
    console.log('Não pode votar!');
} else if (idade >= 16 && idade <= 70) {
    console.log('Pode votar. O voto é obrigatório!');
} else {
    console.log('Pode votar. O voto é opcional!');
}

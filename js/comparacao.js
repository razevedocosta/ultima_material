let eleitor1 = 'diana';
let idadeEleitor1 = 16;

let eleitor2 = 'erick';
let idadeEleitor2 = 13;

// A PESSOA DEVE TER 16 ANOS COMPLETOS OU MAIS PARA VOTAR
if (idadeEleitor1 >= 16) {   // SE FOR VERDADEIRO EXECUTA O IF
    console.log(`${eleitor1} está apta para votar!`);
} else {                    // SE FOR FALSO EXECUTA O ELSE
    console.log(`${eleitor1} NÃO está apto para votar!`);
}

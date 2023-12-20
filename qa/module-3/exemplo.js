// cálculo de salário líquido

// leitura de dados
let salario = 4000;
let bonus = 0.2;
let descontoINSS = 0.11;

// processamento
let salarioBruto = salario + (salario * bonus);
let salarioLiquido = salarioBruto - (salarioBruto * descontoINSS);

// exibição dos resultados
console.log(salarioLiquido);
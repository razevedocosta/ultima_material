// função para calcular o salário de uma pessoa
// parametros de entrada: salario, desconto, faltas, horasExtras
export function salario(salario, desconto, faltas, horasExtras) { 
    const valorFalta = 30;
    let descontoFaltas = faltas * valorFalta;

    return (salario-desconto-descontoFaltas) + horasExtras;
}

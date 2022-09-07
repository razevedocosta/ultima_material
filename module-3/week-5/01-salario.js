export function salario(salario, desconto, faltas, horasExtras) { 
    const valorFalta = 20;
    let descontoFaltas = faltas * valorFalta;

    return (salario-desconto-descontoFaltas) + horasExtras;
}
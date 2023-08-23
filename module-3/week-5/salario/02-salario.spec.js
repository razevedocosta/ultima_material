import { salario } from './02-salario';

describe('Cálculos para folha de pagamento', () => {
    let valorSalario, valorDesconto;

    beforeAll(() => {
        valorSalario = 1000;
        valorDesconto = 100;
    });

    it('exibir o salário bruto', () => {
        expect(salario(valorSalario, 0, 0, 0)).toBe(valorSalario);
    });

    it('exibir o valor do salário após retirar os descontos', () => {
        expect(salario(valorSalario, valorDesconto, 0, 0)).toBe(900);
    });

    it('exibir o valor do salário após retirar os descontos e as faltas, se houver', () => {
        expect(salario(valorSalario, valorDesconto, 5, 0)).toBe(750);
    });

    it('exibir o valor do salário após retirar os descontos, faltas e somar as horas extras', () => {
        expect(salario(valorSalario, valorDesconto, 5, 50)).toBe(800);
    });
});
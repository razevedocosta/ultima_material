import { salario } from "./salario";

describe('cálculos para folha de pagamento', () => {
    let valorSalario, descontos, faltas;

    beforeAll(() => {
        valorSalario = 1000;
        descontos = 100;
        faltas = 50;
    })

    it('exibir o salário bruto', () => {
        expect(salario(valorSalario,descontos,faltas)).toBe(valorSalario);
    })

    it('exibir o salário liquido após os descontos', () => {
        expect(salario(valorSalario,descontos,faltas)).toBe(900);    
    })

    it('exibir o salário liquido após os descontos e as faltas', () => {
        expect(salario(valorSalario,descontos,faltas)).toBe(850);    
    })
});
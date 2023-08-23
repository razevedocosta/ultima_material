let pesoErica = 120;
let alturaErica = 1.78;

let pesoRicardo = 70;
let alturaRicardo = 1.7;

let pesoGrazi = 50;
let alturaGrazi = 1.65;

let pesoRodrigo = 80;
let alturaRodrigo = 1.78;

// let imcErica = calcularIMC(pesoErica, alturaErica, 'Erica');
// let imcRicardo = calcularIMC(pesoRicardo, alturaRicardo, 'Ricardo');
// let imcGrazi = calcularIMC(pesoRodrigo, alturaGrazi, 'Grazi');
let imcRodrigo = calcularIMC(pesoGrazi, alturaRodrigo, 'Rodrigo');

function calcularIMC(peso, altura, nome) {
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        console.log(`${nome} ${imc}: Magreza`);
    } else if (imc >= 18.5 || imc <= 24.9) {
        console.log(`${nome} ${imc}: Normal`);
    } else {
        console.log(`${nome} ${imc}: Obesidade`);
    }
} // corrigir cálculo do IMC
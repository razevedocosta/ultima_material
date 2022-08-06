let pesoRodrigo = 70;
let alturaRodrigo = 1.78;

let pesoLeonardo = 70;
let alturaLeonardo = 1.7;

let pesoCintia = 50;
let alturaCintia = 1.65;

let imcRodrigo = calcularIMC(pesoRodrigo, alturaRodrigo, 'Rodrigo');
let imcLeonardo = calcularIMC(pesoLeonardo, alturaLeonardo, 'Leonardo');
let imcCintia = calcularIMC(pesoCintia, alturaCintia, 'Cintia');

function calcularIMC(peso, altura, nome) {
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        console.log(`${nome}: Magreza`);
    } else if (imc >= 18.5 || imc <= 24.9) {
        console.log(`${nome}: Normal`);
    } else {
        console.log(`${nome}: Obesidade`);
    }
}
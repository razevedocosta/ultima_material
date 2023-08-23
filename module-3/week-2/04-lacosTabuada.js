let numero = 2;
let i = 1;

while (numero < 10) {
    console.log('TABUADA DO', numero);
    while (i < 10) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
        i = i + 1;
    }
    console.log('==========');
    i = 1;
    numero = numero + 1;
}
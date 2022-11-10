let texto = ["Hello World"];
let string = "";

//string => |H|e|l|l|o| |W|o|r|l|d|
// for (let letra of texto) {
//     string += letra;
// }
// console.log("Agora o valor da string é: "+string);

// let textoEmMaiusculo = "";

// texto.forEach(letra => {
//     textoEmMaiusculo += letra.toUpperCase();
// });

// console.log(textoEmMaiusculo);

let vogais = "";
for (let i=0; i<texto.length; i++) {
    let cadaLetra = texto[i];

    if (/[aeiou]/.test(cadaLetra)) {
        vogais += cadaLetra;
    }
}

console.log(vogais);
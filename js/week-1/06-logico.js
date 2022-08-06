let pessoa = 'emelly';
let idade = 25;
const resultadoPsicotenico = true;
const resultadoPratico = false;

// E   => &&
// OU  => ||
// NOT => !

//       V                V                             F
if (idade > 18 && resultadoPsicotenico == true && resultadoPratico == true) {
    console.log('Apto para dirigir!');
} else {
    console.log('Que pena, tente de novo ano que vem!');
}
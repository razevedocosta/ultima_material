let array = [5,1,2,3,4];

let i = 0;
let quadrado = 0;
while (i < 5) {
    quadrado = array[i] * array[i];
    console.log(`O quadrado de ${array[i]} é: ${quadrado}`);
    i++;
}

function Usuario(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirDados = function() {
        return `Oi, meu nome é ${this.nome}, e meu email é: ${this.email}`
    }

    this.ola = function() {
        return 'Olá!'
    }
}

const novoUsuario = new Usuario('Diana', 'diana@gmail.com');
const gabriel = new Usuario('Gabriel', 'gabriel@gmail.com');

console.log(novoUsuario.exibirDados())
console.log(gabriel.ola())
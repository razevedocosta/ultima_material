function Usuario(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirDados = function() {
        return `${this.nome}, ${this.email}`
    }
}

const novoUsuario = new Usuario('Rodrigo', 'rodrigo@gmail.com');

console.log(novoUsuario.exibirDados());
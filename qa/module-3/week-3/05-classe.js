// criar a classe usuário
export default class Usuario {
    // criar o método construtor com os atributos nome, email e tipo
    constructor(nome, email, tipo) {
        this.nome = nome
        this.email = email
        this.tipo = tipo || 'aluno'
    }
    
    // criar o método visualizar
    visualizar() {
        return `Nome: ${this.nome}, Email: ${this.email}, Tipo: ${this.tipo}`
    }
}

// criar uma instância da classe
const aluno = new Usuario('Rodrigo', 'rodrigo@gmail.com', 'professor');

// visualizar o resultado
console.log(aluno.visualizar());
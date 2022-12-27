export default class Usuario {
    constructor(nome, email, tipo) {
        this.nome = nome
        this.email = email
        this.tipo = tipo || 'aluno' // tipo passado por parâmetro ou, obrigatoriamente, aluno
    }

    visualizar() {
        return `Nome: ${this.nome} - Email: ${this.email} - Tipo: ${this.tipo}`
    }
}

const aluno = new Usuario('Rodrigo', 'rodrigo@gmail.com');

console.log(aluno.visualizar());
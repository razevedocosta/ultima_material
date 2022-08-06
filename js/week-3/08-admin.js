import Usuario from "./05-classe.js";

class Admin extends Usuario {
    constructor(nome, email, tipo = 'admin') {
        super(nome, email, tipo)
    }

    criarCurso(nomeCurso) {
        return `Curso de ${nomeCurso} criado com sucesso!`;
    }
}

const novoAdmin = new Admin('Severo', 'severo@gmail.com');

console.log(novoAdmin);
console.log(novoAdmin.visualizar());

console.log(novoAdmin.criarCurso('Javascript'));
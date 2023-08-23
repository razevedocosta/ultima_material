import Usuario from "./05-classe.js";

class Admin extends Usuario {
    constructor (nome, email, tipo = 'admin') {
        super(nome, email, tipo)
    }

    criarCurso (nomeCurso) {
        return `Curso de ${nomeCurso} criado com sucesso!`;
    }
}

const administrador = new Admin('João', 'joao@gmail.com')

//console.log(administrador);
console.log(administrador.visualizar());
console.log(administrador.criarCurso('Javascript'));
const aluno = {
    nome: 'Emelly',
    email: 'emelly@gmail.com',
    nomeCurso: 'Javascript',

    visualizar: function() {
        console.log(this.nome, this.email);
    }
}

// Entendendo o this
// aluno.visualizar();

// Exibir undefined quando não existe referência a uma variável válida
// const dados = aluno.visualizar;
// dados();

// É como se o código fosse exibido assim:
const exibir = function() {
    console.log(this.nome)
}

// corrigir exibir
const exibirNome = exibir.bind(aluno);

// exibir();
exibirNome();
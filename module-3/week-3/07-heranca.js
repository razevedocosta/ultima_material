const usuario = {
    nome: 'Fran',
    email: 'fran@gmail.com',
    tipo: 'aluno',

    visualizar: function() {
        console.log(this.nome, this.email, this.tipo);
    }
}

const admin = {
    nome: 'Emelly',
    email: 'Emelly@gmail.com',
    nivel: 'controle',

    criarCurso() {
        console.log('Curso criado com sucesso!');
    }
}

Object.setPrototypeOf(admin, usuario);

admin.criarCurso();
admin.visualizar();
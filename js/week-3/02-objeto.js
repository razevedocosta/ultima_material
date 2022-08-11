const cliente = {
    nome: 'Rodrigo',
    idade: 31,
    rg: 22884640,
    email: 'rodrigo@gmail.com'
}

// Acessar um objeto e exibir os dados
console.log(cliente.nome);

const chaves = ['nome', 'idade', 'rg', 'email'];

chaves.forEach(info => console.log(cliente[info]));

// Adicionando e alterando
cliente.fone = '9887542156';
console.log(cliente);

const delRg = delete cliente.rg;

// Inserir um valor do tipo array
// Inserir um valor do tipo objeto

cliente.dependentes = {
    nome: 'joao',
    sobrenome: 'rodrigo'
}

// corrigir inserção no objeto
cliente.dependentes.push({
    nome: 'ana',
    sobrenome: 'maria'
});

// Entro em dependentes e faço uma filtragem para encontrar o nome joao
const novo = cliente.dependentes.filter(dep => dep.nome === 'joao');

// Funções
const cliente = {
    nome: 'Rodrigo',
    idade: 31,
    rg: 22884640,
    email: 'rodrigo@gmail.com',
    saldo: 100,

    depositar: function(valor) {
        this.saldo += valor;
    }
}

console.log(cliente.saldo);
cliente.depositar(100);
console.log(cliente.saldo);

// Percorrendo com for
let relatorio = '';
for (let info in cliente) {
    relatorio += cliente[info]
}    

function consultarSeguro(item) {
    const propsClientes = Object.keys(item);

    if (propsClientes.includes('dependentes')) {
        console.log('Aplicar seguro de vida!');
    }
}

consultarSeguro(cliente);

function Pessoa(nome, cpf, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    }
}

const andre = new Pessoa("Rodrigo", "321654987", 1000);

class Pessoa {
    constructor(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }
}
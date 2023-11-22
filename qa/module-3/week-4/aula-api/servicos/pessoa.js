const fs = require('fs')

function getAll() {
    return JSON.parse(fs.readFileSync('pessoas.json'))
}

function getPessoaPorId(id) {
    const pessoas = JSON.parse(fs.readFileSync('pessoas.json'))

    const pessoaProcurada = pessoas.filter(pessoa => pessoa.id === id);
    
    return pessoaProcurada
}

function inserePessoa(novaPessoa) {
    const pessoas = JSON.parse(fs.readFileSync('pessoas.json'))

    const novaListaDePessoas = [...pessoas, novaPessoa]

    fs.writeFileSync('pessoas.json', JSON.stringify(novaListaDePessoas));
}

function deletePessoaPorId(id) {
    const pessoas = JSON.parse(fs.readFileSync('pessoas.json'))

    const pessoasFitradas = pessoas.filter(pessoa => pessoa.id !== id);

    fs.writeFileSync('pessoas.json', JSON.stringify(pessoasFitradas));
}

module.exports = {
    getAll, getPessoaPorId, inserePessoa, deletePessoaPorId
}
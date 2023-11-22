const fs = require('fs')

function getAll() {
    return JSON.parse(fs.readFileSync('pessoas.json'))
}

function getPessoaPorId(id) {
    const pessoas = JSON.parse(fs.readFileSync('pessoas.json'))

    const pessoaProcurada = pessoas.filter(pessoa => pessoa.id === id)

    return pessoaProcurada
}

function inserePessoa(novaPessoa) {
    const pessoas = JSON.parse(fs.readFileSync('pessoas.json'))

    const novaListaDePessoas = [...pessoas, novaPessoa]

    fs.writeFileSync('pessoas.json', JSON.stringify(novaListaDePessoas))
}

module.exports = {
    getAll, getPessoaPorId, inserePessoa
}
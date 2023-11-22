const fs = require('fs')

function getAll() {
    return JSON.parse(fs.readFileSync('pessoas.json'))
}

function inserePessoa(novaPessoa) {
    const pessoas = JSON.parse(fs.readFileSync('pessoas.json'))

    const novaListaDePessoas = [...pessoas, novaPessoa]

    fs.writeFileSync('pessoas.json', JSON.stringify(novaListaDePessoas))
}

module.exports = {
    getAll, inserePessoa
}
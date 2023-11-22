const fs = require('fs')

function getAll() {
    return JSON.parse(fs.readFileSync('pessoas.json'))
}

function getPessoaPorId(id) {
    const pessoas = JSON.parse(fs.readFileSync('pessoas.json'))

    const pessoaProcurada = pessoas.filter(pessoa => pessoa.id === id)

    return pessoaProcurada
}

module.exports = {
    getAll, getPessoaPorId
}
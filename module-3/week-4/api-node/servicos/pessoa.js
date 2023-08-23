const fs = require("fs")

function getAll() {
    return JSON.parse(fs.readFileSync('pessoas.json'))
}

function getPessoaPorId(id) {
    const pessoas = JSON.parse(fs.readFileSync('pessoas.json'))

    const pessoaProcurada = pessoas.filter(pessoa => pessoa.id === id)[0]

    return pessoaProcurada
}

function inserePessoa(novaPessoa) {
    const pessoas = JSON.parse(fs.readFileSync('pessoas.json'))

    const novaListaPessoas = [...pessoas, novaPessoa]

    fs.writeFileSync('pessoas.json', JSON.stringify(novaListaPessoas))
}

function editaPessoa(detalhes, id) {
    let pessoas = JSON.parse(fs.readFileSync('pessoas.json'))
    const indice = pessoas.findIndex(pessoa => pessoa.id === id)

    const conteudoEditado = { ...pessoas[indice], ...detalhes }

    pessoas[indice] = conteudoEditado

    fs.writeFileSync('pessoas.json', JSON.stringify(pessoas))
}

function deletaPessoaPorId(id) {
    const pessoas = JSON.parse(fs.readFileSync('pessoas.json'))

    const pessoasFiltradas = pessoas.filter(pessoa => pessoa.id !== id)

    fs.writeFileSync('pessoas.json', JSON.stringify(pessoasFiltradas))
}

module.exports = {
    getAll, getPessoaPorId, inserePessoa, editaPessoa, deletaPessoaPorId
}
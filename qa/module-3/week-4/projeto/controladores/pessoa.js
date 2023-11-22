const { getAll, inserePessoa } = require('../servicos/pessoa')

function getPessoas(req, res) {
    const pessoas = getAll()
    res.send(pessoas)
}

function postPessoa(req, res) {
    const pessoa = req.body
    inserePessoa(pessoa)
    res.send('Pessoa cadastrada com sucesso!')
}

module.exports = {
    getPessoas, postPessoa
}
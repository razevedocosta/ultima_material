const { getAll, getPessoaPorId, inserePessoa } = require('../servicos/pessoa')

function getPessoas(req, res) {
    const pessoas = getAll()
    res.send(pessoas)
}

function getPessoa(req, res) {
    try {
        const id = req.params.id
        const pessoa = getPessoaPorId(id)
        res.send(pessoa)
    } catch (erro) {
        res.status(500)
        res.send(erro.message)
    }
}

function postPessoa(req, res) {
    try {
        const pessoa = req.body
        inserePessoa(pessoa)
        res.send('Pessoa cadastrada com sucesso!')
    } catch (erro) {
        res.status(500)
        res.send(erro.message)
    }
}

module.exports = {
    getPessoas, getPessoa, postPessoa
}
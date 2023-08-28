const { getAll, getPessoaPorId, inserePessoa, deletePessoaPorId } = require('../servicos/pessoa')

function getPessoas(req, res) {
    try {
        const pessoas = getAll()
        res.send(pessoas)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getPessoa(req, res) {
    try {
        const id = req.params.id
        const pessoa = getPessoaPorId(id)
        res.send(pessoa)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postPessoa(req, res) {
    try {
        const pessoa = req.body
        inserePessoa(pessoa)
        res.status(201)
        res.send('Pessoa cadastrada com sucesso!')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deletePessoa (req, res) {
    try {
        const id = req.params.id
        deletePessoaPorId(id)
        res.send('Pessoa deletada com sucesso!')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getPessoas, getPessoa, postPessoa, deletePessoa
}
const fs = require('fs')
const { getAll, getPessoaPorId, inserePessoa, editaPessoa, deletaPessoaPorId } = require('../servicos/pessoa')

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

        if (id && Number(id)) {
            const pessoa = getPessoaPorId(id)
            res.send(pessoa)
        } else {
            res.status(422)
            res.send('ID inválido')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postPessoa(req, res) {
    try {
        const pessoa = req.body

        if (req.body.nome) {
            inserePessoa(pessoa)
            res.status(201)
            res.send('Pessoa cadastrada com sucesso!')
        } else {
            res.status(422)
            res.send('O campo nome é obrigatório!')
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchPessoa(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body
            editaPessoa(body, id)
            res.send('Dados alterados com sucesso!')
        } else {
            res.status(422)
            res.send('ID inválido')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deletePessoa(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletaPessoaPorId(id)
            res.send('Pessoa deletada com sucesso!')
        } else {
            res.status(422)
            res.send('ID inválido')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getPessoas, getPessoa, postPessoa, patchPessoa, deletePessoa
}
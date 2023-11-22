const { getAll, getPessoaPorId } = require('../servicos/pessoa')

function getPessoas(req, res) {
    const pessoas = getAll()
    res.send(pessoas)
}

function getPessoa(req, res) {
    const id = req.params.id
    const pessoa = getPessoaPorId(id)
    res.send(pessoa)
}

module.exports = {
    getPessoas, getPessoa
}
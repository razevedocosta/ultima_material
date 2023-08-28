const { Router } = require('express')
const { getPessoas, getPessoa, postPessoa, deletePessoa } = require('../controladores/pessoa')

const router = Router()

router.get('/', getPessoas)

router.get('/:id', getPessoa)

router.post('/', postPessoa)

router.delete('/:id', deletePessoa)

module.exports = router
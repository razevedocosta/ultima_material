const { Router } = require('express')
const { getPessoas, getPessoa, postPessoa, deletePessoa, updatePessoa } = require('../controladores/pessoa')

const router = Router()

router.get('/', getPessoas)

router.get('/:id', getPessoa)

router.post('/', postPessoa)

module.exports = router
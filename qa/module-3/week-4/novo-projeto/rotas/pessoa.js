const { Router } = require('express')
const { getPessoas, getPessoa } = require('../controladores/pessoa')

const router = Router()

router.get('/', getPessoas)

router.get('/:id', getPessoa)

module.exports = router
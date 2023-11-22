const { Router } = require('express')
const { getPessoas, postPessoa } = require('../controladores/pessoa')

const router = Router()

router.get('/', getPessoas)

router.post('/', postPessoa)

module.exports = router
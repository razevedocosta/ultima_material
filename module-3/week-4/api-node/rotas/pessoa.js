const { Router } = require("express")
const { getPessoas, getPessoa, postPessoa, patchPessoa, deletePessoa } = require("../controladores/pessoa")

const router = Router()

router.get('/', getPessoas)
// router.get('/', (req, res) => {
//     try {
//         // throw new Error('teste')
//         res.send('Olá mundo!')
//     } catch (error) {
//         res.status(500)
//         // res.send(error.message)
//     }
// })

router.get('/:id', getPessoa)

router.post('/', postPessoa)

router.patch('/:id', patchPessoa)

router.delete('/:id', deletePessoa)

module.exports = router
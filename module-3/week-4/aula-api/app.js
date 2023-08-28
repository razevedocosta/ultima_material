const express = require('express')
const rotaPessoa = require('./rotas/pessoa')

const app = express()
app.use(express.json())

const port = 3000

app.use('/pessoas', rotaPessoa)

app.listen(port, () => {
    console.log(`Servidor online na porta ${port}`)
})
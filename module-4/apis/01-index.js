const express = require('express')

const app = express()

app.listen(3000)

// GET
app.route('/').get( (request, response) => {
    return response.send("Iniciando meu servidor!")
})

// middleware
app.use(express.json()) // permite a utilização do formato json

// POST
// app.route('/').post( (req, res) => {
//     // console.log(req.body)
//     res.send(req.body)
// })

// PUT
// let person = "Rodrigo"

// app.route('/').get( (req, res) => res.send(person) )

// app.route('/').put( (req, res) => {
//     person = req.body.person
//     res.send(person)
// })

// DELETE
// app.route('/:id').delete( (req, res) => {
//     // lógica de exclusão aqui
//     res.send(req.params.id)
// })

// USO DE PARÂMETROS
app.route('/').get( (req, res) => res.send(req.query.name))
app.route('/').put( (req, res) => res.send(req.body.person))
app.route('/:id').put( (req, res) => res.send(req.params.id))
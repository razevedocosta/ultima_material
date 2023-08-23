// preparação do ambiente
const express = require('express')

const cors = require('cors')

const app = express()

app.listen(5000, () => console.log('Rodando na porta 5000...'))

app.use(cors())
app.use(express.json())

// definição do array de usuários
let users = [
    {
        id: 1,
        name: "Camila Silva",
        occupation: "QA Analyst",
        city: "São Paulo"
    },
    {
        id: 2,
        name: "Ana Silva",
        occupation: "Test Sênior",
        city: "Salvador"
    }
]

// criação da rota get
app.route('/api').get((req, res) => res.json({
    users
}))

// criação da rota get passando o parâmetro id
app.route('/api/:id').get((req, res) => {
    const userId = req.params.id
    const user = users.find(user => Number(user.id) === Number(userId))

    if (!user) {
        return res.json("Usuário não encontrado")
    }
    
    res.json(user)
})

// criação da rota post informando um usuário para cadastro
app.route('/api').post((req, res) => {
    const lastId = users[users.length - 1].id

    users.push({
        id: lastId + 1,
        name: req.body.name,
        occupation: req.body.occupation,
        city: req.body.city
    })

    res.json("Usuário cadastrado com sucesso")
})

app.route('/api/:id').put((req, res) => {
    const userId = req.params.id

    const user = users.find(user => Number(user.id) === Number(userId))

    if (!user) {
        return res.json('Usuário não encontrado')
    }

    const updatedUser = {
        ...user,
        city: req.body.city,
        name: req.body.name,
        occupation: req.body.occupation,
    }

    users = users.map(user => {
        if (Number(user.id) === Number(userId)) {
            user = updatedUser
        }
        return user
    })

    res.json("Usuário atualizado com sucesso")
})

app.route('/api/:id').delete((req, res) => {
    const userId = req.params.id

    users = users.filter(user => Number(user.id) !== Number(userId))

    res.json('Usuário removido com sucesso')
})
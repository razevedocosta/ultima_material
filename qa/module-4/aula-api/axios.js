const express = require('express')
const cors = require('cors')

const app = express()

app.listen(3000, () => console.log('Rodando na porta 3000...'))

app.use(cors())
app.use(express.json())

let users = [
    {
        login: "mojombo",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4"
    },
    {
        login: "defunkt",
        id: 2,
        node_id: "MDQ6VXNlcjI=",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4"
    }
]

app.route('/api').get((req, res) => res.json({
    users
}))

app.route('/api/:id').get((req, res) => {
    const userId = req.params.id
    const user = users.find(user => Number(user.id) === Number(userId))

    if (!user) {
        return res.json("Usuário não encontrado")
    }

    res.json(user)
})

app.route('/save').post((req, res) => {
    //pegar o útimo id na cadastrado

    //criar o objeto de usuário
    users.push({
        login: req.body.login,
        id: 3,
        node_id: req.body.node_id,
        avatar_url: req.body.avatar_url
    })

    //retornar o usuário cadastrado
    res.json("Usuário cadastrado com sucesso")
})
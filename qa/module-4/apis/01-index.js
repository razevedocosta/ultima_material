const express = require('express');

const app = express();

app.listen(3000);

// GET
app.route('/').get((requisicao, resposta) => {
    return resposta.send("Servidor online na porta 3000!");
})

// POST
app.route('/salvar').post((requisicao, resposta) => {
    return resposta.send(requisicao.body);
})
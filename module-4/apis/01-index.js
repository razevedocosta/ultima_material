const express = require('express');

const app = express();

app.listen(3000)

// GET
app.route('/').get((request, response) => {
    return response.send("Servidor online na porta 3000");
})

// POST
app.route('/save').post((request, response) => {
    response.send(request.body)
})
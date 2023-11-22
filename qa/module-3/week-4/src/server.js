import express from 'express';
const app = express();

import rotas from './rotas';
rotas(app);

app.listen(3000, function() {
    console.log("Servidor no ar na porta 3000...");
});
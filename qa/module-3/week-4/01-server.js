import { createServer } from 'http';

const servidor = createServer(function(req, res){
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Meu primeiro servidor com NodeJS</title>
        </head>
        <body>
            <h1>Olá Tamiris!</h1>
        </body>
        </html>
    `);
});

servidor.listen(3000);
console.log("Servidor online na porta 3000...");
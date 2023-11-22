import express from 'express';

const app = express();

app.listen(3000, function() {
    console.log('Servidor online na porta 3000...');
});

app.get('/', function(req, res) {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Meu Primeiro Servidor NodeJS</title>
            </head>
            <body>
                <h1>Olá Galera!</h1>
            </body>
        </html>
    `);
});

app.get('/ultima', function(req, res) {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Meu Primeiro Servidor NodeJS</title>
        </head>
        <body>
            <h1>Ultima School</h1>
        
            <ul>
                <li>Cursos</li>
                <li>Eventos</li>
                <li>Login</li>
            </ul>
        </body>
        </html>
    `);
});

app.get('/pessoas', function(req, res) {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Meu Primeiro Servidor NodeJS</title>
            </head>
            <body>
                <h1>Olá Pessoas!</h1>
            </body>
        </html>
    `);
});
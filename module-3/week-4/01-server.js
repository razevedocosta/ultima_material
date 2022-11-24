import { createServer } from 'http';

const servidor = createServer(function (req, resp) {
    resp.end(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Petshop Shop do Pet </h1>
                <p>Exemplo de parágrafo do texto do trabalho</p>
            </body> 
        </html>
    `);
});
servidor.listen(3000);
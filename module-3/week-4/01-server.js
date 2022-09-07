import { createServer } from 'http';

const servidor = createServer(function (req, resp) {
    resp.end(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Petshop Shop do Pet </h1>
            </body> 
        </html>
    `);
});
servidor.listen(3000);
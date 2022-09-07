import { createServer } from 'http';

const servidor = createServer(function (req, resp) {

    let html = '';
    if (req.url == '/') {
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body> 
        </html>
    `;
    } else if (req.url == '/livros')
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Listagem de livros </h1>
            </body> 
        </html>
    `;

    resp.end(html);
});
servidor.listen(3000);
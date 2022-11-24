const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    const items = [
        { title: "D", message: "esenvolver aplicações"},
        { title: "E", message: "JS usa javascript para renderizar HTML"},
        { title: "M", message: "uito fácil de usar"},
        { title: "A", message: "gora"},
        { title: "I", message: "nstalação instantânea"},
        { title: "S", message: "em igual"}
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"

    res.render("pages/index", {
        properties: items,
        subtitle: subtitle
    });
})

app.get("/sobre", function(req, res) {
    res.render("pages/about");
})

app.listen(8080);
console.log("Server online...");
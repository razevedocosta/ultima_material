const fs = require("fs")

console.log(JSON.parse(fs.readFileSync("livros.json")))
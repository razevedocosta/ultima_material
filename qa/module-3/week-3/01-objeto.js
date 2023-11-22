// Object Literal
let empty = {}
let ponto = {x:0, y:0}
let livro = {
  autor: {
    nome: "Joao",
    sobrenome: "Rodrigo"
  },
  titulo: "Eu e tu contra nós dois"
}

// New
let o = new Object();
let a = new Array();

// Create
let z = Object.create({
  x: 1, y: 1
});

console.log(z.x + z.y);
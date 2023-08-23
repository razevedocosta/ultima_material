const titulo = document.getElementById('titulo')
console.log(titulo)

// usando textContent/innerText para atribuir um conteúdo de texto
// titulo.textContent = 'Olá'

// usando innerHTML para trocar o conteúdo de tag html
// titulo.innerHTML = 'Olá, <small></small>'

// manipular o valor de input com value
// titulo.value = 'Novo valor'

const header = document.querySelector('header')
header.setAttribute('id', 'header')
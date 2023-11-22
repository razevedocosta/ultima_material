Semana 5

Programação Javascript e testes de unidade

# Criação do projeto e instalação do Jest
- verificando as versões (node, npm, yarn)
- executar npm init -y (criar o arquivo package.json)
- executar yarn add -D jest @types/jest (instalar jest)
- alterar o valor da chave script para "jest"
- instalar babel (trocar extensão do arquivo para cjs)
- yarn test para executar

# Primeiro teste
- criando o arquivo soma.spec.js
- criando o arquivo soma.js
- melhorias para o teste
- utilzando jest watch mode ("test:watch": "jest --watchAll")

# Segundo teste
- criando o arquivo salario.spec.js
- criando o arquivo salario.js
- utilizando o match beforeEach()
- exibindo o relatório de teste ("test:coverage": "jest --coverage")

# Terceiro teste
- criando o arquivo queryString.spec.js
- criando o arquivo queryString.js
- refatoração

# Quarto teste
- criar a pasta test
- criar o arquivo item.test.js
- importar os códigos a serem utilizados
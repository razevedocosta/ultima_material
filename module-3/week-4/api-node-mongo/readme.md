# Criando uma API Rest com Expresse e MongoDB
Para executar o projeto: npm run dev

1. Criando um projeto em NodeJS
- Executar npm init -y para criar o arquivo package.json
- Criar o arquivo server.js para o servidor local
- Executar npm install nodemon
- Criar o script "dev": "nodemon server.js" no arquivo package.json e npm run dev para executar

2. Trabalhando com o express
- Executar o comando npm install express
- Criar o arquivo app.js
- Inserir "type": "module" para permitir a importação de arquivos

3. Criando o método POST
- Cria a rota POST no arquivo app.js
- Inserir a linha app.use() para permitir o reconhecimento do formato json

4. Criando o método PUT
- Criar a rota put e a função buscaLivro()

5. Criando o método DELETE
- Copiar a rota PUT e alterar para DELETE
- Utilizar desestruturação para pegar o id do livro

6. Utilizando MongoDB
- Acessar https://www.mongodb.com/atlas/database
- Criar conta, cluster e inserir um documento
- Iniciando com mongoose, executar o comando npm install mongoose@6.2.6
- Criar a pasta src/config com o arquivo dbConnect.js
- Acessar o mongoAtlas > Database > Connect
- Incluir o schema do banco. Na pasta src criar a pasta models com o arquivo Livro.js

7. Organizando a API
- Dentro de src criar: 
  - a pasta controllers com o arquivo livrosController.js
  - a pasta routes com o arquivo livrosRoutes.js
- Fazer a importação no app.js

8. Criando os métodos POST, PUT, DELETE
- Criar os métodos cadastrarLivro, atualizarLivro, excluirLivro no controller
- Criar as rotas post, put e delete no arquivo routes
- Removar a rota post, put e delete do app.js

9. Acrescentando um novo schema
- Criar o arquivo Autor.js na pasta models
- Criar o arquivo autoresController.js na pasta controllers
- Criar o arquivo autoresRoutes.js na pasta routes
- Utilizar a rota autores no arquivo index.js

10. Criando outras consultas
- Criar o método listarLivroPorEditora usando query params
- Utilizar a rota para o método no arquivo livrosRoutes.js

PARTE 2

11. Criando variáveis de ambiente e ESLint
- Executar npm install dotenv@16.0.3
- Utilizar o import no server.js
- Criar o arquivo .env
- Executar npm init @eslint/config
- npx eslint ./src --fix

12. Utilizando try-catch para tratamento de erros
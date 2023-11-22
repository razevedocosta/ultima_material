# Criar uma api utilizando NodeJS (pasta api-node)
- https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers

1. Iniciando o projeto
- Criar o projeto com npm init -y
- Instalar o express npm install express
- Instalar o nodemon npm install nodemon

2. Criando ROTAS
- Criar a pasta rotas com o arquivo pessoa.js
- Dentro do arquivo criar uma rota '/pessoa' que será responsável pelo método get do arquivo app.js
- Criar as rotas post, patch, delete
- Criar um trecho para simular o erro de status 500 dentro do método GET

3. Utilizando CONTROLADORES
- Criar a pasta controladores com o arquivo pessoa.js
- Isolar a função de retorno da rota

4. Utilizando JSON para armazenar dados
- Criar o arquivo pessoas.json e criar objetos para representar os dados

5. Utilizando SERVIÇOS
- Criar a pasta serviços e isolar a conexão com o banco de dados

6. Lidando com parâmetros
- Criar o método GET que recebe o parâmetro ID dentro do controlador
- Criar a especificação do método dentro do serviço
- Criar a rota específica para buscar por id nas rotas

7. Post a partir do body
- Criar a função postPessoa no arquivo pessoa.js da pastas rotas
- Criar a função postPessoa no arquivo pessoa.js dentro do controlador
- Criar a função inserePessoa no serviço
- Inserir a linha 5 no arquivo app.json
- Testar a inserção de uma nova pessoa por meio do Postman informando o body

8. Patch a partir do body
- Criar a função editaPessoa no serviço
- Criar a função patchPessoa dentro do controlador
- Criar a rota para o método patch informando o parâmetro de entrada id 

9. Delete ?

10. Lidando com erros
- Garantir que o id enviado na rota seja um número
- Garantir que os dados do body estejam corretos

OBS:
- rotas: direcionam o caminho
- controladores: lógica, verificação de status
- serviços: conexões com ferramentas e serviços externos
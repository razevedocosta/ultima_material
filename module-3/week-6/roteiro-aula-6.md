Semana 6

CI/CD

# Introdução
- o que é CI/CD?
- merge gate
- github actions 

# Criando códigos para integração contínua
- hello github actions
- actions para pull requests

# Passo a passo
- criar um projeto no github
- criar uma branch a partir da branch developer
- adicionar no arquivo package.json a chave scripts
  "scripts": {
    "test": "echo \"Tests running...\"",
    "build": "echo \"Build running...\"",
    "deploy": "echo \"Deploying new build to cloud server...\""
  },
- criar o arquivo main.yml
- enviar as alterações para o github
- criar uma pasta .github/workflows com o arquivo hello-gh-actions.yml
- fazer o commit e o pull request
- visualizar detalhes no github

# Implementando actions para o pull request
- editar o arquivo yml no github

# Habilitar proteção ao branch
- arquivo pull-request
- no github, acessar a aba Settings
- ir em menu Branches
- botão Add rules
- preencher branch name pattern **/** (todos os branches)
  [ ] require status checks to pass before merging
  [ ] include administrators

# Adicionar proteção para o merge
- arquivo merge-master

# Enviar alertas para o telegram
- buscar por telegram no marketplace
- 
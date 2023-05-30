# 04-alinhamento-css

Para este projeto você deve seguir as orientações abaixo:

- criar um arquivo chamado index.html e estilizar cada uma das partes

1. Cabeçalho
- criar o cabeçalho usando a tag header com a seguinte estrutura
  -- header
     - nav
       - a
       - ul
         - li (4 itens de lista: home, sobre, serviços, depoimentos)
- o cabeçalho e a lista devem ter display flex com os elementos alinhados lado a lado
- o último elemento da lista deve ter a cor de fundo preta e a cor da fonte branca
- ajuste o alinhamento para que o link e a lista fiquem centralizados

2. Layout geral
- criar uma div (pode nomear com uma classe container) com a seguinte estrutura
  -- div
     - aside
     - main
- a tag aside deve ocupar 25% do espaço horizontal
- a tag main deve ocupar o máximo de espaço restante
- a div deve conter um gap de .8rem
- utilize bordas ou cores para visualizar o resultado

3. Galeria de imagens
- dentro da div main, crie uma div com a classe galeria
- insira 9 imagens
- utilize gap de .8rem, além das propriedas de display, flex-wrap e justify-content

4. Botão com ícone
- crie um elemento button contendo uma imagem e o texto 'Salvar'
- para a imagem define largura e altura de 2rem
- alinhe os elementos no meio do eixo com um espaço entre eles de .4rem

5. Rodapé da página
- crie um elemento footer contendo o ano atual
- defina cor de fundo, cor para o texto, altura de 8rem e comprimento total da tela com flex: 1
- alinhe o conteúdo de texto no meio da rodapé
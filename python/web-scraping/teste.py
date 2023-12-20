import requests
from bs4 import BeautifulSoup

# URL da página que contém a tabela
url = 'https://transparencia.alesc.sc.gov.br/gabinetes.php?conta=15712'

# Faz o download da página usando a biblioteca requests
response = requests.get(url)

# Verifica se a solicitação foi bem-sucedida (código 200)
if response.status_code == 200:
    # Cria um objeto BeautifulSoup para analisar o conteúdo HTML
    soup = BeautifulSoup(response.text, 'html.parser')

    # Localiza a tabela (substitua 'table' pelo nome da tag da sua tabela)
    table = soup.find('table')

    # Verifica se a tabela foi encontrada
    if table:
        # Itera sobre as linhas da tabela
        for row in table.find_all('tr'):
            # Itera sobre as células de cada linha
            cells = row.find_all(['th', 'td'])
            # Imprime o conteúdo de cada célula
            for cell in cells:
                print(cell.text.strip())
            print('---')  # Adiciona uma linha separadora entre as linhas da tabela
    else:
        print('Tabela não encontrada na página.')

else:
    print('Falha ao baixar a página. Código de status:', response.status_code)
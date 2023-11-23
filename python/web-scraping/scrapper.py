from urllib.request import urlopen
from bs4 import BeautifulSoup
import pandas as pd
import sqlite3

# criar o banco de dados
conexao = sqlite3.connect('licitacoes.sqlite3'); 
cursor = conexao.cursor(); 

cursor.execute('CREATE TABLE licitacoes (id INT, ano INT, mes VARCHAR(10), numero VARCHAR(255), natureza VARCHAR(255));'); 

# criar lista de coisas a serem utilizadas
lista_licitacoes = []
pages = []

# url para acesso 
url = 'https://www.cmm.am.gov.br/transparencia/licitacao/'

# resposta e parser da página
response = urlopen(url)
html = response.read()
soup = BeautifulSoup(html, 'html.parser')

# navegação pelos elementos HTML da página
licitacoes = soup.findAll('div', attrs={'class': 'lic-int-body'})
paginas = soup.findAll('a', attrs={'class': 'page-numbers'})

# descobrir a quantidade de páginas
for pagina in paginas:
    pages.append(pagina.text)

pages.pop(-1)
total_de_paginas = int(pages[-1])

# com a quantidade de páginas, executar o laço até o limite de páginas
for i in range(total_de_paginas):
    url = 'https://www.cmm.am.gov.br/transparencia/licitacao/?cpage='+ str(i+1)
    response = urlopen(url)
    html = response.read()

    for licitacao in licitacoes:
        ano = licitacao.find('div', attrs={'class': 'lic-body-item al'})
        mes = licitacao.find('div', attrs={'class': 'lic-body-item ml'})
        numero = licitacao.find('div', attrs={'class': 'lic-body-item ed'})
        natureza = licitacao.find('div', attrs={'class': 'lic-body-item st st-l'})
        
        lista_licitacoes.append([ano.text, mes.text, numero.text, natureza.text])

        sql = '''INSERT INTO licitacoes (ano, mes, numero, natureza) 
                 VALUES (?, ?, ?, ?)'''
        cursor.execute(sql, lista_licitacoes[i])
        conexao.commit()

# criar o dataframe com as licitações coletadas
data_licitacoes = pd.DataFrame(lista_licitacoes, columns=['ano','mês','número','natureza'])
data_licitacoes.to_csv('licitacoes_cmm_2023', index=False)
print(data_licitacoes)

conexao.close()
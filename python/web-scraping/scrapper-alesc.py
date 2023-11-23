from urllib.request import urlopen
from bs4 import BeautifulSoup
import pandas as pd
import sqlite3

# criar o banco de dados
# conexao = sqlite3.connect('alesc.sqlite3'); 
# cursor = conexao.cursor(); 

# cursor.execute('CREATE TABLE despesas (id INT, almoxarifado INT);'); 

# criar lista de coisas a serem utilizadas
columns = []
values = []
cont = 0

# url para acesso 
url = 'https://transparencia.alesc.sc.gov.br/gabinetes.php?conta=15712'

# resposta e parser da página
response = urlopen(url)
html = response.read()
soup = BeautifulSoup(html, 'html.parser')

tabela = soup.find('div', id='tabs-2023')
#print(tabela)

if tabela:
    for linha in tabela.find_all('tr'):
        header = linha.find_all('th')

        for item in header:
            columns.append(item.text)

        valores = linha.find_all('td')

        for item in valores:
            if (cont < 14):
                values.append(item.text)

                sql = "insert into despesas (mes, valor) values ({}, {})".format(columns[cont], values[cont])
                cont = cont + 1
                print(sql)

print(columns)
print(values)
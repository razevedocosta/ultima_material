import sqlite3; 

conexao = sqlite3.connect('empresa_db.sqlite3'); 
cursor = conexao.cursor(); 

cursor.execute('CREATE TABLE fornecedor (id INT, nome VARCHAR(100), endereco VARCHAR(250), cidade VARCHAR(100));'); 

conexao.commit()
conexao.close()
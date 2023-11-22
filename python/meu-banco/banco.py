import sqlite3; 

conexao = sqlite3.connect('db.sqlite3'); 
cursos = conexao.cursor(); 

cursos.execute('CREATE TABLE fornecedor (id INT, nome VARCHAR(100), endereco VARCHAR(250), cidade VARCHAR(100));'); 

conexao.commit()
conexao.close()
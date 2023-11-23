import sqlite3; 

conexao = sqlite3.connect('empresa_db.sqlite3')
cursor = conexao.cursor()

print("Informe os dados do fornecedor")
id = input("ID: ")
nome = input("Nome: ")
endereco = input("Endereço: ")
cidade = input("Cidade: ")

values = [id, nome, endereco, cidade]

sql = '''
        INSERT INTO fornecedor (id, nome, endereco, cidade) VALUES (?, ?, ?, ?);
      '''

cursor.execute(sql, values)
conexao.commit()
print("Cadastro realizado com sucesso!")
conexao.close()
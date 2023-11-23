import sqlite3; 

conexao = sqlite3.connect('empresa_db.sqlite3')
cursor = conexao.cursor()

sql = '''
        SELECT * FROM fornecedor;
      '''

resultados = cursor.execute(sql)
for resultado in resultados:
    print(resultado)

print("Fim do programa!")
conexao.close()
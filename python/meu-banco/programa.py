import sqlite3; 

conexao = sqlite3.connect('empresa_db.sqlite3')
cursor = conexao.cursor()

print("*** Bem vindo ao Sitema do FORNECEDOR ***")
opcao = input("Escolha uma opção: 1 Cadastrar | 2 Listar | 3 Atualizar | 4 Excluir | 0 Sair ")

# converter a entrada de dados de str para int
print(type(opcao))

# incluir um loop para ficar executando até o 0 ser digitado
# ajustar para comparar com valor int
if (opcao == '1'):
    print("")
    print("Informe os valores para cadastro de fornecedor")
    id = input("ID: ")
    nome = input("Nome: ")
    endereco = input("Endereço: ")
    cidade = input("Cidade: ")

    values = [id, nome, endereco, cidade]

    # consultar para saber se já existe fornecedor com o ID informado
    # se existir, exibir uma mensagem informando que o ID já existe
    # se não existir, realizar o cadastro

    sql = '''
            INSERT INTO fornecedor (id, nome, endereco, cidade) VALUES (?, ?, ?, ?);
        '''

    cursor.execute(sql, values)
    conexao.commit()

    print("Cadastro realizado com sucesso!")

elif(opcao == '2'):
    print("")
    print("Os fornecedores cadastrados são: ")
    sql = '''
        SELECT * FROM fornecedor;
      '''

    resultados = cursor.execute(sql)
    for resultado in resultados:
        print(resultado)

elif(opcao == '3'):
    print("")
    id = input("Informe o ID do fornecedor que deseja atualizar: ")
    cidade = input("Digite o nome da cidade para atualizar: ")

    values = [cidade, id]

    # pensar em formas de deixar o update dinâmico
    # perguntando ao usuário qual atributo ele deseja atualizar
    # ou perguntando os novos valores para todos os atributos

    sql = '''
            UPDATE fornecedor SET cidade = ? WHERE id = ?
          '''
    
    cursor.execute(sql, values)
    conexao.commit()

    print("Fornecedor atualizado com sucesso")

elif(opcao == '4'):
    print("")
    id = input("Informe o ID do fornecedor que deseja excluir: ")

    # consultar para saber se o ID existe ou não na tabela
    # se não existir, exibir uma mensagem informando "ID inválido"
    # se existir, realizar a exclusão do registro

    sql = f'DELETE FROM fornecedor WHERE id = {id}'
    
    cursor.execute(sql)
    conexao.commit()

    print("Fornecedor excluido com sucesso")

conexao.close()
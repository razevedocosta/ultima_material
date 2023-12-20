import requests

print('Tabela FIPE')

print('\n1 - Listar marcas')
print('2 - Consultar modelos de uma marca')
print('0 - Sair do programa')
opcao = int(input('\nSelecione uma opção: '))

while (opcao != 0):
    if (opcao == 1):
        url = f'https://parallelum.com.br/fipe/api/v1/carros/marcas'

        response = requests.get(url)
        data = response.json()
        
        if response.status_code == 200:
            for carro in data:
                print(f'{carro["codigo"]}: {carro["nome"]}')
        else:
            print('Sem registros!')

    if (opcao == 2):
        marca = int(input('Qual marca deseja consultar os modelos? '))

        url = f'https://parallelum.com.br/fipe/api/v1/carros/marcas/{marca}/modelos'

        response = requests.get(url)
        data = response.json()
        modelos = data["modelos"]

        if response.status_code == 200:
            for carro in modelos:
                print(f'{carro["codigo"]}: {carro["nome"]}')
        else:
            print('Sem registros!')

    print('1 - Listar marcas')
    print('2 - Consultar modelos de uma marca')
    print('0 - Sair do programa')
    opcao = int(input('\nSelecione uma opção: '))

print('\n--- Fim do Programa ---')
import requests

print('Githup Users API\n')

username = input('Qual é o nome do usuário? ')

url = f'https://api.github.com/users/{username}'
response = requests.get(url)
data = response.json()

if response.status_code == 200:
    print(f'\nNome completo: {data["name"]}')
    print(f'Bio: {data["bio"]}')
    print(f'Cidade: {data["location"]}')
    print(f'Repositórios: {data["repos_url"]}')
else:
    print('Não foi possível encontrar o usuário! =/')

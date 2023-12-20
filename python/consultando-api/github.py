# Requisições HTTP com Python e consumindo a API do GitHub
import requests

print('GitHub Users\n')

username = input('Qual é o nome do usuário? ')

url = f'https://api.github.com/users/{username}'

response = requests.get(url)
data = response.json()

if response.status_code == 200:
    print(f'\nNome completo: {data["name"]}')
    print(f'Bio: {data["bio"]}')
    print(f'Localização: {data["location"]}')
    print(f'Seguidores: {data["followers"]}')
    print(f'Seguindo: {data["following"]}')
else:
    print('Não foi possível encontrar o usuário!')
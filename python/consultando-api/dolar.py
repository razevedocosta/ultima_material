import requests

url = "https://economia.awesomeapi.com.br/last/USD-BRL"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()

if response.status_code == 200:
    data = response.json()
    cotacao = float(data['USDBRL']['high'])
    mensagem = f"U$ 1 dólar corresponde a R$ {cotacao:.2f}"
    print(mensagem)
else:
    print(f"A requisição falhou com o código de status {response.status_code}")
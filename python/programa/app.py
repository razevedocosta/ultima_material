from modelos.restaurante import Restaurante
from modelos.cardapio.bebida import Bebida
from modelos.cardapio.prato import Prato

restaurante_praca = Restaurante('praça', 'Gourmet')

bebida_suco = Bebida('suco de melancia', 5.0, 'grande')
prato_pao = Prato('pão frito', 4.0, 'normal')

restaurante_praca.adicionar_no_cardapio(bebida_suco)
restaurante_praca.adicionar_no_cardapio(prato_pao)

def main():
    restaurante_praca.exibir_cardapio

if __name__ == '__main__':
    main()

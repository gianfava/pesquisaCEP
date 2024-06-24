# Projeto Consulta de CEP

Este é um projeto simples de consulta de CEP que permite ao usuário digitar um CEP e obter informações como logradouro, bairro, cidade e estado. O projeto também inclui um modo noturno que pode ser ativado e desativado por um botão com ícones de lua e sol.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

1. `index.html` - Contém a estrutura HTML da página.
2. `styles.css` - Contém os estilos CSS para a página, incluindo o estilo para o modo noturno.
3. `scripts.js` - Contém a lógica JavaScript para a validação do CEP, consulta à API e alternância do modo noturno.

## Como Funciona

### HTML (`index.html`)

O arquivo HTML define a estrutura da página, incluindo:
- Um botão para alternar entre o modo claro e o modo noturno.
- Um formulário para a entrada do CEP.
- Uma área para exibir os resultados da consulta.

### CSS (`styles.css`)

O arquivo CSS define os estilos da página, incluindo:
- Transições suaves para mudanças de cor e fundo.
- Estilos específicos para o modo noturno.

### JavaScript (`scripts.js`)

O arquivo JavaScript contém a lógica para:
- Validar o formato do CEP.
- Consultar a API de CEP (usando a API pública ViaCEP).
- Exibir os resultados da consulta.
- Alternar entre o modo claro e o modo noturno.

## Passo a Passo

### 1. Estrutura HTML

O arquivo `index.html` inclui referências ao Bootstrap, Font Awesome, o arquivo CSS (`styles.css`) e o arquivo JavaScript (`scripts.js`). A estrutura básica da página contém um formulário para entrada do CEP e um botão para alternar o modo noturno.

### 2. Estilos CSS

O arquivo `styles.css` define:
- Estilos de transição para uma mudança suave entre o modo claro e o modo noturno.
- Estilos específicos para o modo noturno, aplicados quando a classe `dark-mode` está presente no `body`.

### 3. Lógica JavaScript

O arquivo `scripts.js` contém funções para:
- Validar o CEP: Remove caracteres não numéricos e verifica se o CEP tem 8 dígitos.
- Construir a URL da API: Utiliza o CEP validado para construir a URL da consulta.
- Lidar com a submissão do formulário: Faz uma requisição à API ViaCEP, processa a resposta e exibe os resultados.
- Alternar o modo noturno: Adiciona ou remove a classe `dark-mode` do `body` e altera o ícone do botão.

## Como Usar

1. Clone este repositório em sua máquina local.
2. Abra o arquivo `index.html` em um navegador.
3. Digite um CEP no campo fornecido e clique em "Consultar".
4. Use o botão com o ícone de lua/sol para alternar entre o modo claro e o modo noturno.

## Requisitos

- Um navegador moderno (Google Chrome, Mozilla Firefox, etc.).
- Conexão com a internet para carregar as bibliotecas externas (Bootstrap, Font Awesome) e fazer a consulta à API.

## Bibliotecas e APIs Utilizadas

- [Bootstrap 4.5.2](https://getbootstrap.com/)
- [Font Awesome 5.15.4](https://fontawesome.com/)
- [API ViaCEP](https://viacep.com.br/)


/project-root
│
├── index.html
├── styles.css
├── scripts.js
└── README.md



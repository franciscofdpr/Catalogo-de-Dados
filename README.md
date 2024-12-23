
# Catálogo de Dados

O catálogo foi construído utilizando o **DCAT (Data Catalog Vocabulary)**, um vocabulário recomendado pela W3C para a descrição de catálogos de dados, facilitando a publicação e o compartilhamento de dados abertos na web.

A aplicação permite a visualização de conjuntos de dados com a opção de aplicar filtros por título, data de criação e licença, e fornece links diretos para o download dos dados. O catálogo está disponível em formato web, sendo simples de navegar e interagir.

## Funcionalidades

- **Filtros de Pesquisa**: Permite filtrar os conjuntos de dados por:
  - Título
  - Data de Criação
  - Licença
- **Exibição de Dados**: A página exibe informações detalhadas sobre os conjuntos de dados, como título, descrição, data de criação, licença e links para download dos dados.
- **Licença**: Todos os dados estão sob a licença **Creative Commons Atribuição 4.0 Internacional**.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilo visual, utilizando o Flexbox para layout responsivo.
- **JavaScript**: Para carregar e exibir dinamicamente os dados e aplicar filtros.
- **JSON**: Formato de dados para armazenar os conjuntos de dados.
- **Python**: Para servir os arquivos localmente utilizando o módulo `http.server`.
- **DCAT (Data Catalog Vocabulary)**: Vocabulário semântico utilizado para estruturar os dados no formato JSON, facilitando a interoperabilidade e o compartilhamento de catálogos de dados.

## Estrutura do Projeto

A estrutura do repositório é a seguinte:

```
/catálogo-de-dados-meteorológicos
|-- index.html          # Página principal do catálogo
|-- script.js           # Script para carregar e exibir os dados
|-- styles.css          # Estilo CSS para a interface
|-- catalogo_dados.json # Arquivo JSON com os dados meteorológicos
|-- README.md           # Este arquivo
```

### `index.html`

Este arquivo contém a estrutura HTML da página principal. Ele inclui um formulário de filtro e uma área onde os dados são exibidos.

### `script.js`

Este script JavaScript carrega o arquivo `catalogo_dados.json` e exibe dinamicamente os conjuntos de dados na página. Ele também lida com a funcionalidade de filtro.

### `styles.css`

Define o estilo visual do catálogo, incluindo a tipografia, cores e layout responsivo. A interface foi criada com Flexbox para garantir que seja agradável em diferentes tamanhos de tela.

### `catalogo_dados.json`

Este arquivo contém os conjuntos de dados em formato JSON, estruturados de acordo com o vocabulário **DCAT**. Cada conjunto de dados possui informações como título, descrição, data de criação, licença, formato de dados e link para download.

## Como Executar Localmente

### Pré-requisitos

- **Python** instalado na sua máquina. Para verificar se o Python está instalado, execute o seguinte comando no terminal:

  ```bash
  python --version
  ```

  Ou, se você estiver utilizando o macOS ou Linux, pode ser necessário usar `python3`:

  ```bash
  python3 --version
  ```

- **VS Code** instalado. Caso não tenha, você pode [baixá-lo aqui](https://code.visualstudio.com/).

### Passos para Rodar o Projeto Localmente

1. **Abra o Projeto no VS Code**

   Abra a pasta do seu projeto no VS Code. Caso não tenha o VS Code instalado, [baixe aqui](https://code.visualstudio.com/).

2. **Abra o Terminal no VS Code**

   No VS Code, abra o terminal integrado indo em **Terminal > New Terminal** ou pressionando **Ctrl + `**.

3. **Verifique se o Python Está Instalado**

   No terminal, digite:

   ```bash
   python --version
   ```

   Ou, se necessário, use:

   ```bash
   python3 --version
   ```

   Isso verificará se o Python está corretamente instalado. Se o Python não estiver instalado, [baixe-o aqui](https://www.python.org/downloads/).

4. **Iniciar o Servidor HTTP Local**

   No terminal integrado do VS Code, navegue até o diretório onde seus arquivos do projeto estão localizados. Use o comando `cd` para isso:

   ```bash
   cd caminho/para/o/seu/projeto
   ```

   Em seguida, execute o seguinte comando para iniciar o servidor:

   ```bash
   python -m http.server 8000
   ```

   Ou, se o comando `python` não funcionar, use `python3`:

   ```bash
   python3 -m http.server 8000
   ```

   O terminal deverá exibir algo como:

   ```
   Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
   ```

5. **Acesse o Catálogo no Navegador**

   Abra seu navegador e vá para o seguinte endereço:

   ```
   http://localhost:8000
   ```

   Você verá a interface do catálogo de dados meteorológicos.

6. **Testar os Filtros**

   A página permitirá filtrar os conjuntos de dados de acordo com o título, data de criação e licença. Teste os filtros para garantir que a funcionalidade esteja funcionando corretamente.

7. **Parar o Servidor**

   Quando terminar de testar, no terminal do VS Code, pressione **Ctrl + C** para interromper o servidor local.
---

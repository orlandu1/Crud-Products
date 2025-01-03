ESTRUTURA DE DIRETÓRIOS - DESAFIO DE ENTREVISTA
CRUD SIMPLES DE PRODUTOS FEITO EM REACT + PHP POO + TAILWIND + SQL + JAVASCRIPT
ORLANDO ALVES
ESTE PROJETO SERÁ ENVIADO SEM SER BUILDADO PARA QUE O AVALIADOR VEJA TODA A ESTRUTURA DE DIRETÓRIOS JÁ QUE O BUILD RETIRA
--------------------------------------------------------------------------------------------------------------------------

├── node_modules/          # Diretório gerado pelo gerenciador de pacotes contendo dependências do projeto
├── public/                # Arquivos públicos acessíveis diretamente pelo navegador
│   └── vite.svg           # Logo do Vite
├── src/                   # Código-fonte principal do projeto
    ├── assets/            # Recursos estáticos como imagens e ícones
    │   └── box.png
    ├── backend/           # Lógica de backend
    │   └── api/           
    │       ├── conn.php   # Arquivo de conexão com o banco de dados
    │       └── Products.php # Endpoint ou lógica relacionada a produtos
    ├── components/        # Componentes reutilizáveis do React
    │   ├── Form/          # Componentes relacionados a formulários
    │   │   └── Form.jsx
    │   ├── List/          # Componentes relacionados a listas
    │   │   └── List.jsx
    │   └── NavBar/        # Componentes relacionados à barra de navegação
    │       └── NavBar.jsx
    ├── pages/             # Páginas do aplicativo
    │   ├── AddProduct/
    │   │   └── AddProduct.jsx
    │   ├── Error/
    │   │   └── Error.jsx
    │   └── HomePage/
    │       └── HomePage.jsx
    ├── routes/            # Configuração de rotas do React
    │   └── routes.jsx
    ├── utils/             # Utilitários e funções auxiliares
    │   └── Modal.jsx
    ├── App.jsx            # Componente principal do React
    ├── index.css          # Estilos globais do projeto
    └── main.jsx           # Ponto de entrada do aplicativo React


---------------------------------------------------------------------------------

Requisito: 𝐂𝐚𝐝𝐚𝐬𝐭𝐫𝐨 𝐞 𝐥𝐢𝐬𝐭𝐚𝐠𝐞𝐦 𝐝𝐞 𝐩𝐫𝐨𝐝𝐮𝐭𝐨𝐬

𝐂𝐚𝐝𝐚𝐬𝐭𝐫𝐨:

- Formulário com os campos abaixo:

  - Nome do produto - campo de texto
  - Descrição do produto - campo de texto
  - Valor do produto - campo de valor
  - Disponível para venda - campo com 2 opções: sim / não

𝐋𝐢𝐬𝐭𝐚𝐠𝐞𝐦:

- Colunas da listagem: nome, valor
- Ordenação por valor do menor para o maior
- Quando cadastrar um novo produto é para abrir a listagem automaticamente
- Deve existir um botão para cadastrar um novo produto a partir da listagem
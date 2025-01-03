ESTRUTURA DE DIRETÓRIOS

src/
├── backend/             # Arquivos PHP para comunicação com o SQL
│   ├── db/              # Configuração e conexão com o banco de dados
│   │   └── connection.php # Configuração da conexão com o SQL
│   ├── api/             # Endpoints da API
│   │   ├── getProducts.php # Endpoint para listar produtos
│   │   ├── addProduct.php  # Endpoint para adicionar produto
│   │   └── deleteProduct.php # Endpoint para excluir produto
├── components/          # Componentes reutilizáveis
│   ├── ProductForm.jsx  # Formulário para cadastro/edição de produtos
│   ├── ProductList.jsx  # Lista de produtos
│   └── Navbar.jsx       # Barra de navegação (se necessário)
├── pages/               # Páginas principais
│   ├── HomePage.jsx     # Página inicial
│   ├── ProductsPage.jsx # Página de listagem/cadastro de produtos
│   └── NotFound.jsx     # Página para rota não encontrada
├── services/            # Serviços para lógica de negócio
│   └── productService.js # Funções para manipular dados (ex.: CRUD)
├── utils/               # Funções utilitárias
│   └── validations.js   # Validações ou outras funções reutilizáveis
├── App.jsx              # Componente raiz
├── main.jsx             # Arquivo de entrada
└── index.html           # Template HTML

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
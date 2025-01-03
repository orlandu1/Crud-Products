Estrutura de Diretórios - Desafio de Entrevista

Descrição do Projeto
  Este é um CRUD simples de produtos desenvolvido com as seguintes tecnologias:

  React
  PHP (POO)
  Tailwind CSS
  SQL
  JavaScript

Objetivo Futuro

  Transformar este projeto no S.A.V.E. (Sistema de Administração de Vendas e Estoque), um sistema completo para gerenciamento de vendas e estoque.

Autor

  Orlando Alves

Aviso

  Este projeto será enviado sem ser buildado para permitir que o avaliador visualize toda a estrutura de diretórios e o código-fonte completo. Isso ocorre porque o processo de build remove muitos arquivos de desenvolvimento e oculta a arquitetura do projeto.

Estrutura de Diretórios
Abaixo está a estrutura do projeto:


├── dist/                  # Build de projeto para distribuição
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
    ├── .gitignore         # Controle de versionamento do GIT
    ├── vite.config.js         # Arquivo de configurações do VITE que contém o direcionamento de proxy e servidor de arquivos
    └── main.jsx           # Ponto de entrada do aplicativo React


---------------------------------------------------------------------------------

Funcionalidades do Projeto

CRUD completo de produtos:

  Criação
  Leitura
  Atualização
  Exclusão
  Integração entre frontend (React) e backend (PHP com POO).
  Estilização moderna com Tailwind CSS.
  Gerenciamento de estados e navegação com React Router.
  Estrutura escalável e modularizada para fácil manutenção.

Como Executar o Projeto

Clone o repositório:

  git clone 

Instale as dependências:

  cd <PASTA_DO_PROJETO>
  npm install

Configure o backend:

  Certifique-se de que seu servidor local (como XAMPP ou WAMP) está configurado corretamente.
  Importe o arquivo de banco de dados (SQL) para sua instância de MySQL.

Execute o frontend:

  npm run dev
  Acesse o aplicativo em:
  http://localhost:5173

Se precisar de ajuda ou orientações, é só avisar! 😊
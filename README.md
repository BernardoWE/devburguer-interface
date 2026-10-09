# DevBurguer Interface

Frontend do projeto DevBurguer, uma aplicação de e-commerce para restaurante com cardápio, carrinho de compras, checkout e área administrativa.

Este repositório contém apenas a interface web em React. A aplicação consome uma API backend em `http://localhost:3001` para listar produtos, categorias, autenticação de usuários e processamento de pedidos.

## Visão geral

O projeto simula o fluxo principal de um restaurante digital:

- navegação no cardápio
- filtro por categoria
- adição de itens ao carrinho
- checkout com integração ao Stripe
- autenticação de cliente
- área administrativa para gestão de produtos e pedidos

## Funcionalidades

### Cliente

- visualizar produtos e categorias
- filtrar itens por categoria
- adicionar itens ao carrinho
- alterar quantidade de produtos
- criar conta e fazer login
- concluir compra via checkout

### Administração

- acessar área admin
- cadastrar novos produtos
- editar produtos existentes
- gerenciar categorias e pedidos

## Stack utilizada

- React 19
- Vite
- JavaScript
- Styled Components
- Material UI
- React Router DOM
- Axios
- React Hook Form
- Yup
- Stripe (frontend integration)

## Estrutura do projeto

```bash
src/
├── components/
├── containers/
├── hooks/
├── layouts/
├── routes/
├── services/
├── config/
├── styles/
├── utils/
├── main.jsx
└── App.jsx
```

## Pré-requisitos

- Node.js 18+ (recomendado)
- npm
- Git
- backend da aplicação rodando localmente na porta 3001

## Como rodar localmente

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd devburguer-interface
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o backend da aplicação

Este frontend espera que a API esteja disponível em:

```bash
http://localhost:3001
```

Se o backend ainda não estiver rodando, o frontend não conseguirá carregar produtos, categorias e autenticação.

4. Inicie o frontend:

```bash
npm run dev
```

5. Acesse a URL mostrada no terminal pelo Vite, normalmente:

```bash
http://localhost:5173
```

## Observações importantes

- Este repositório não inclui o backend nem o banco de dados do projeto.
- A base da API está configurada em `src/services/api.js` para `http://localhost:3001`.
- A integração com Stripe é feita no frontend por meio de `clientSecret`, normalmente gerado pelo backend.
- Não há arquivo `.env` configurado no projeto atual; se futuramente a API for movida para outra porta ou domínio, será necessário ajustar a URL no arquivo de serviços.

## Scripts disponíveis

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Autor

Bernardo

GitHub: @BernardoWE

## Repositórios relacionados

- Frontend: este repositório
- Backend: repositório separado da API do projeto

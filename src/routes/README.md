
# Sistema de Rotas

Este diretório contém a configuração do sistema de rotas da aplicação.

## `index.jsx`

O arquivo `index.jsx` é responsável por definir todas as rotas da aplicação utilizando a biblioteca `react-router-dom`.

### Estrutura das Rotas

As rotas são definidas utilizando a função `createBrowserRouter`. Cada rota é um objeto com as seguintes propriedades:

- `path`: O caminho da URL da rota.
- `element`: O componente que será renderizado quando a rota for acessada.

### Exemplo de Rota

```jsx
{
    path: "/",
    element: <Login />,
},
```

Neste exemplo, a rota `/` renderiza o componente `Login`.

## `App.jsx`

O arquivo `App.jsx` foi modificado para utilizar o componente `Outlet` do `react-router-dom`. O `Outlet` é responsável por renderizar o componente correspondente à rota acessada.

## `main.jsx`

O arquivo `main.jsx` foi modificado para utilizar o `RouterProvider` do `react-router-dom`. O `RouterProvider` é responsável por prover o sistema de rotas para toda a aplicação.

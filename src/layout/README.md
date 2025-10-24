# Documentação de Layout

Este documento explica como utilizar os componentes de layout `Navbar` e `Sidebar` em páginas que requerem que o usuário esteja logado.

## Passo a Passo

Siga os passos abaixo para adicionar a `Navbar` e a `Sidebar` a uma página.

### 1. Crie um Componente de Layout

Primeiro, crie um novo componente de layout que irá agrupar a `Navbar`, a `Sidebar` e o conteúdo da página. Este componente será usado para as páginas que precisam de autenticação.

**Exemplo: `src/layout/ProtectedLayout.jsx`**

```jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function ProtectedLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ProtectedLayout;
```

### 2. Atualize as Rotas

Em seguida, modifique o arquivo de rotas (`src/routes/index.jsx`) para usar o `ProtectedLayout` nas rotas que você deseja proteger. Isso é feito aninhando as rotas protegidas dentro de uma rota que usa o `ProtectedLayout` como seu elemento.

**Exemplo: `src/routes/index.jsx`**

```jsx
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Agendador from "../pages/home/Agendador";
import ProtectedLayout from "../layout/ProtectedLayout"; // Importe o layout

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        element: <ProtectedLayout />, // Use o layout para as rotas aninhadas
        children: [
            {
                path: "/agendador",
                element: <Agendador />,
            },
            // Adicione outras rotas que precisam do layout aqui
        ]
    },
]);
```

### 3. Estrutura de Estilos

Para que o layout funcione corretamente, você pode precisar de alguns estilos básicos. O exemplo acima usa classes do Tailwind CSS (`flex`, `h-screen`, `flex-1`, `flex-col`, `p-4`). Certifique-se de que seu projeto esteja configurado para usar o Tailwind CSS e que os estilos sejam aplicados corretamente.

Com esses passos, as páginas que você colocar dentro do `ProtectedLayout` no seu arquivo de rotas irão automaticamente renderizar com a `Navbar` no topo e a `Sidebar` na lateral.

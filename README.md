# Guia de Login com Credenciais Fixas

Este projeto demonstra como criar rapidamente uma tela de login usando dados fixos (hardcoded). A ideia é fornecer uma base de estudo antes de integrar o fluxo de autenticação com uma API real.

## Visão geral da tela

- Arquivo principal: `src/pages/Auth/Login.jsx`
- Rotas: `src/routes/index.jsx` define `"/"` para o login e `"/agendador"` como rota protegida de exemplo.
- Página pós-login: `src/pages/home/Agendador.jsx`

## Passo a passo para implementar o login

1. **Definir credenciais de estudo**
   - No topo do componente `Login`, crie uma constante com os dados que serão aceitos:
     ```js
     const FIXED_CREDENTIALS = {
       email: "admin@exemplo.com",
       password: "123456",
     };
     ```
   - Altere os valores conforme preferir.

2. **Controlar os campos do formulário**
   - Importe `useState` e utilize-o para guardar `email` e `password`.
   - Atualize o `value` e o `onChange` dos inputs para refletirem o estado.

3. **Tratar o envio do formulário**
   - Importe `useNavigate` de `react-router-dom` para redirecionar.
   - No `onSubmit`, compare os dados informados com `FIXED_CREDENTIALS`.
   - Caso coincidam, execute `navigate("/agendador")`.
   - Caso contrário, mostre uma mensagem de erro usando outro estado (por exemplo `errorMessage`).

4. **Dar feedback ao usuário**
   - Exiba uma mensagem informando quais credenciais devem ser usadas durante o estudo.
   - Mostre um alerta em vermelho quando o login falhar.
   - Desabilite o botão enquanto a validação estiver em andamento para evitar múltiplos envios.

5. **Proteger a rota de destino (opcional para estudo)**
   - Em um cenário real, você adicionaria um contexto de autenticação ou `PrivateRoute` para garantir que apenas usuários logados vejam `/agendador`.
   - Para fins de estudo com dados fixos, basta confiar na navegação feita via `navigate`.

## Exemplo completo do componente

```jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FIXED_CREDENTIALS = {
  email: "admin@exemplo.com",
  password: "123456",
};

function Login() {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
    setErrorMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailMatch =
      formValues.email.trim().toLowerCase() === FIXED_CREDENTIALS.email.toLowerCase();
    const passwordMatch = formValues.password === FIXED_CREDENTIALS.password;

    if (emailMatch && passwordMatch) {
      navigate("/agendador");
      return;
    }

    setErrorMessage("Credenciais inválidas. Tente novamente.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">Login Page</h1>
        
        <p className="text-sm text-center text-gray-500">
          Use <span className="font-semibold text-indigo-600">{FIXED_CREDENTIALS.email}</span> e senha{" "}
          <span className="font-semibold text-indigo-600">{FIXED_CREDENTIALS.password}</span>.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Digite seu Email"
              autoComplete="email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Digite sua Senha"
              autoComplete="current-password"
              required
            />
          </div>

          {errorMessage && (
            <div className="p-3 text-sm text-red-700 bg-red-100 border border-red-200 rounded">
              {errorMessage}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
```

## Próximos passos sugeridos

- Extrair as credenciais para variáveis de ambiente.
- Criar um contexto de autenticação para compartilhar o estado de login em toda a aplicação.
- Substituir a validação fixa por uma requisição a uma API real.

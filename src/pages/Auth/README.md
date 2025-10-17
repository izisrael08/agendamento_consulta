
# Estilizando a Página de Login com Tailwind CSS
# Guia do Componente de Login

Este documento explica como construir e entender o componente de login (`Login.jsx`), abordando tanto a estilização com **Tailwind CSS** quanto a lógica de programação com **React**.

---

## 1. Lógica do Componente (React)

O objetivo é criar um "componente controlado", onde o React gerencia os dados do formulário.

### Passo 1: Importar os Hooks Necessários

Precisamos do `useState` para guardar os dados do formulário e do `useNavigate` para redirecionar o usuário após o login.

```jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
```

### Passo 2: Declarar os Estados

Dentro do componente `Login`, vamos criar os estados:
1.  `formValues`: Um objeto para armazenar o email e a senha digitados.
2.  `errorMessage`: Uma string para guardar mensagens de erro.

```jsx
function Login() {
    const [formValues, setFormValues] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    // ...
}
```

### Passo 3: Criar a Função `handleChange`

Esta função será chamada toda vez que o usuário digitar algo nos campos. Ela atualiza o estado `formValues` com o novo valor.

```jsx
const handleChange = (event) => {
    const { name, value } = event.target; // Pega o nome ('email' ou 'password') e o valor do campo
    setFormValues((prev) => ({
        ...prev, // Copia os valores antigos
        [name]: value, // Atualiza apenas o campo que foi modificado
    }));
    setErrorMessage(""); // Limpa o erro ao digitar novamente
};
```

### Passo 4: Conectar os Inputs ao Estado

Nos elementos `<input>`, adicione as propriedades `value` e `onChange` para que o React possa controlá-los.

```jsx
<input
    type="email"
    name="email" // O 'name' deve ser igual à chave no estado
    value={formValues.email} // O valor exibido vem do estado
    onChange={handleChange} // A função que atualiza o estado
    // ...
/>

<input
    type="password"
    name="password"
    value={formValues.password}
    onChange={handleChange}
    // ...
/>
```

### Passo 5: Criar a Função `handleSubmit`

Esta função é chamada quando o formulário é enviado. Ela previne o recarregamento da página, valida as credenciais e redireciona o usuário ou mostra uma mensagem de erro.

```jsx
const handleSubmit = (event) => {
    event.preventDefault(); // Impede que a página recarregue

    // Lógica de validação (exemplo com dados fixos)
    if (formValues.email === "israel@gmail.com" && formValues.password === "12345") {
        navigate("/agendador"); // Sucesso: redireciona
    } else {
        setErrorMessage("Credenciais inválidas. Tente novamente."); // Falha: define a mensagem de erro
    }
};
```

### Passo 6: Ligar `handleSubmit` e Exibir Erros

Adicione o `onSubmit` ao `<form>` e um local para renderizar a mensagem de erro.

```jsx
<form className="space-y-6" onSubmit={handleSubmit}>
    {/* ... inputs ... */}

    {errorMessage && (
        <div className="p-3 text-sm text-red-700 bg-red-100 rounded">
            {errorMessage}
        </div>
    )}

    <button type="submit">Entrar</button>
</form>
```

---

## 2. Estilização com Tailwind CSS

Atualmente, o componente `Login.jsx` está assim:

```jsx
function Login() {
    return <h1>Login Page</h1>
}

export default Login;
```

## Exemplo de Estilização

Vamos criar um formulário de login simples e estilizado com o Tailwind CSS. Substitua o conteúdo do seu `Login.jsx` pelo código abaixo:

```jsx
function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-900">Login</h1>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="seu@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Senha</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="********"
                        />
                    </div>
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

### Entendendo as Classes Utilizadas

-   **Layout Principal**: `flex items-center justify-center min-h-screen bg-gray-100` cria um container que centraliza o card de login na tela.
-   **Card do Formulário**: `w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md` define a aparência do card branco, com largura limitada, preenchimento, sombra e bordas arredondadas.
-   **Título**: `text-2xl font-bold text-center text-gray-900` estiliza o título "Login".
-   **Inputs**: `w-full px-3 py-2 ...` garante que os campos de texto ocupem toda a largura, tenham preenchimento interno e uma aparência consistente.
-   **Estado de Foco**: `focus:ring-indigo-500 focus:border-indigo-500` melhora a acessibilidade, destacando o campo ativo com um "anel" colorido.
-   **Botão**: `w-full ... bg-indigo-600 hover:bg-indigo-700` cria um botão de largura total com cor de fundo, texto branco e um efeito visual ao passar o mouse.

## Próximos Passos

1.  **Copie e cole** o código de exemplo no seu arquivo `src/pages/Auth/Login.jsx`.
2.  **Execute o projeto** para ver a página de login estilizada.
3.  **Consulte a documentação do Tailwind CSS** (https://tailwindcss.com/docs) para aprender mais sobre as classes disponíveis e como customizar o design.
4.  **Aplique a lógica React** descrita na seção 1 para tornar o formulário funcional.

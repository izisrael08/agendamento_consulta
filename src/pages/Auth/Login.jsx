import { useState } from "react";
import { useNavigate } from "react-router-dom";



const CREDENTIALS = {
    email: "israel@gmail.com",
    password: "12345",
}

function Login() {

    const [fromValues, setFormvValues] = useState({ email: "", password: "",})
    const [errorMessage, setErrorMensage] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormvValues((current) => ({ ...current, [name]:  value}));
        setErrorMensage("");
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailMatch = fromValues.email.trim().toUpperCase() === CREDENTIALS.email.trim().toUpperCase()
        const passwordMatch = fromValues.password === CREDENTIALS.password;


        if (emailMatch && passwordMatch) {
            navigate("/Agendador");
            return;
        }

        setErrorMensage("Email ou senha inválidos. Tente novamente.");


    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-900">Login Page</h1>

        <p className="text-sm text-center text-gray-500">
          Use <span className="font-semibold text-indigo-600">{CREDENTIALS.email}</span> e senha{" "}
          <span className="font-semibold text-indigo-600">{CREDENTIALS.password}</span>.
        </p>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input type="text"
                            id="email"
                            name="email"
                            value={fromValues.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Digite seu Email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Senha</label>
                        <input type="password"
                            id="password"
                            name="password"
                            value={fromValues.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Digite sua Senha"
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

       

    )

}

export default Login;

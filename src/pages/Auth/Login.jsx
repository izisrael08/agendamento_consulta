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

    const handleInputChange = (event) => {
        const {nome, value} = event.target;
        setFormvValues((current) => ({ ...current, [nome]:  value}));
        setErrorMensage("");
    }

    








    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-900">Login Page</h1>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input type="text"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Digite seu Email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Senha</label>
                        <input type="password"
                            id="password"
                            name="password"
                            className="w-full px-3 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Digite sua Senha"
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
    )

}

export default Login;

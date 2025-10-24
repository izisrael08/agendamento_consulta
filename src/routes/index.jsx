
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Agendador from "../pages/home/Agendador";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([ 
    {
        path: "/",
        element: <Login />,
    },
    {
        element: <Layout />,
        children: [
            {
                path: "/agendador",
                element: <Agendador />,
            },
        ],
    },
]);

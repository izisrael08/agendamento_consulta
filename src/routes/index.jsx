
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Agendador from "../pages/home/Agendador";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/agendador",
        element: <Agendador />,
    },
]);

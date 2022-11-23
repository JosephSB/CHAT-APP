import { Navigate, useRoutes } from "react-router-dom";
import BaseRouter from "@/router/Base.router";
import Login from "@/pages/Auth/views/Login";
import Register from "@/pages/Auth/views/Register";

const AuthRouter = () => {
    const routes = [
        BaseRouter,
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/register",
            element: <Register/>,
        },
        {
            path: "*",
            element: <Navigate to="/" />,
        },
    ];

    return useRoutes(routes);
}

export default AuthRouter;
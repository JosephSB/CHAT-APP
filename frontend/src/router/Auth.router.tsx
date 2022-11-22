import { Navigate, useRoutes } from "react-router-dom";
import BaseRouter from "@/router/Base.router";
//import Login from "../pages/Auth/Login";
//import Register from "../pages/Auth/Register";

const AuthRouter = () => {
    const routes = [
        BaseRouter,
        {
            path: "/login",
            element: <p>login</p>,
        },
        {
            path: "/register",
            element: <p>register</p>,
        },
        {
            path: "*",
            element: <Navigate to="/" />,
        },
    ];

    return useRoutes(routes);
}

export default AuthRouter;
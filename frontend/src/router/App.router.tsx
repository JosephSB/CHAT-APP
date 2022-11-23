import { Navigate, useRoutes } from "react-router-dom";
import BaseRouter from "@/router/Base.router";
import MainApp from "@/pages/App";

function AppRouter() {
    const routes = [
        BaseRouter,
        {
            path: "/app",
            element: <MainApp/>,
        },
        {
            path: "*",
            element: <Navigate to="/app" />,
        },
    ];

    return useRoutes(routes);
}

export default AppRouter;
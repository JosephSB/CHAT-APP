import { Navigate, useRoutes } from "react-router-dom";
import BaseRouter from "@/router/Base.router";

function AppRouter() {
    const routes = [
        BaseRouter,
        {
            path: "/app",
            element: <p>app</p>,
        },
        {
            path: "*",
            element: <Navigate to="/app" />,
        },
    ];

    return useRoutes(routes);
}

export default AppRouter;
import { useRoutes } from "react-router-dom";
import BaseRouter from "@/router/Base.router";

function AppRouter() {
    const routes = [
        BaseRouter,
        {
            path: "/app",

            children: [
                {
                    path: "/",
                    element: <p>app</p>,
                }
            ]
        },
    ];

    return useRoutes(routes);
}

export default AppRouter;
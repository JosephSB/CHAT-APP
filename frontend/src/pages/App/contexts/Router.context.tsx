import { useContext, useState } from "react";
import { createContext } from "react";

interface RouterInterface {
    active: number,
    handleRoute: (newRoute: number) => void
}


const RouterContext = createContext<RouterInterface>(
    {
        active: 0,
        handleRoute: () => {return}
    }
);

interface Props {
    children: JSX.Element | JSX.Element[]
}

const RouterContextProvider = ({ children }: Props) => {
    const [routeActive, setRouteActive] = useState(0);

    const handleRouteActive = (newRoute: number) => setRouteActive(newRoute)

    return (
        <RouterContext.Provider value={
            {
                active: routeActive,
                handleRoute: handleRouteActive
            }
        }>
            {children}
        </RouterContext.Provider>
    )
}


export { RouterContextProvider };

const ContextRouter = () => {
    return useContext(RouterContext);
}

export default ContextRouter;
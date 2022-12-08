import { useContext, useState, createContext } from "react";

interface RouterInterface {
    viewsActive: {
        aside: number,
        body: number
    }
    handleAsideRoute: (newRoute: number) => void
    handleBodyRoute: (newRoute: number) => void
}


const RouterContext = createContext<RouterInterface>(
    {
        viewsActive: {
            aside: 0,
            body: 0
        },
        handleAsideRoute: () => {return},
        handleBodyRoute: () => {return}
    }
);

interface Props {
    children: JSX.Element | JSX.Element[]
}

const RouterContextProvider = ({ children }: Props) => {
    const [viewsActive, setViewActive] = useState({
        aside: 0,
        body: 1
    });

    const handleRouteActive = (newRoute: number, type: "aside" | "body") => {
        setViewActive({...viewsActive, [type]:newRoute })
    }

    return (
        <RouterContext.Provider value={
            {
                viewsActive,
                handleAsideRoute: (newRoute: number) => handleRouteActive(newRoute, "aside"),
                handleBodyRoute: (newRoute: number) => handleRouteActive(newRoute, "body")
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
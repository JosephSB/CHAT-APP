import { QueryClient, QueryClientProvider } from "react-query"
import { DataProfileContextProvider } from "./contexts/DataProfile.context"
import { RouterContextProvider } from "./contexts/Router.context"
import { WebSocketContextProvider } from "./contexts/Websocket.context"
import AsideRouter from "./router/Aside.router"
import BodyRouter from "./router/Body.router"
import { StyledAside, StyledBody, StyledMain } from "./styles"

const queryClient = new QueryClient()

const MainApp = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <DataProfileContextProvider>
                <WebSocketContextProvider>
                    <RouterContextProvider>
                        <StyledMain>
                            <StyledAside>
                                <AsideRouter />
                            </StyledAside>
                            <StyledBody>
                                <BodyRouter />
                            </StyledBody>
                        </StyledMain>
                    </RouterContextProvider>
                </WebSocketContextProvider>
            </DataProfileContextProvider>
        </QueryClientProvider>
    )
}

export default MainApp
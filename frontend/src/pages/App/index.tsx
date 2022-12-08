import { QueryClient,QueryClientProvider } from "react-query"
import { DataProfileContextProvider } from "./contexts/DataProfile.context"
import { RouterContextProvider } from "./contexts/Router.context"
import AsideRouter from "./router/Aside.router"
import BodyRouter from "./router/Body.router"
import { StyledAside, StyledBody, StyledMain } from "./styles"

const queryClient = new QueryClient()

const MainApp = () => {
    return(
        <QueryClientProvider client={queryClient}>
            <DataProfileContextProvider>
                <RouterContextProvider>
                    <StyledMain>
                        <StyledAside>
                            <AsideRouter/>
                        </StyledAside>
                        <StyledBody>
                            <BodyRouter/>
                        </StyledBody>
                    </StyledMain>
                </RouterContextProvider>
            </DataProfileContextProvider>
        </QueryClientProvider>
    )
}

export default MainApp
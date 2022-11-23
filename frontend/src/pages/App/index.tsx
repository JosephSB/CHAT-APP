import { RouterContextProvider } from "./contexts/Router.context"
import AsideRouter from "./router/Aside.router"
import { StyledAside, StyledBody, StyledMain } from "./styles"

const MainApp = () => {
    return(
        <RouterContextProvider>
            <StyledMain>
                <StyledAside>
                    <AsideRouter/>
                </StyledAside>
                <StyledBody>

                </StyledBody>
            </StyledMain>
        </RouterContextProvider>
    )
}

export default MainApp
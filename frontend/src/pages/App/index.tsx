import { DataProfileContextProvider } from "./contexts/DataProfile.context"
import { RouterContextProvider } from "./contexts/Router.context"
import AsideRouter from "./router/Aside.router"
import { StyledAside, StyledBody, StyledMain } from "./styles"

const MainApp = () => {
    return(
        <DataProfileContextProvider>
            <RouterContextProvider>
                <StyledMain>
                    <StyledAside>
                        <AsideRouter/>
                    </StyledAside>
                    <StyledBody>

                    </StyledBody>
                </StyledMain>
            </RouterContextProvider>
        </DataProfileContextProvider>
    )
}

export default MainApp
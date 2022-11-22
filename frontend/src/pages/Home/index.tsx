import BtnPrimary from "@/components/buttons/BtnPrimary"
import LogoTunkay from "@/components/LogoTunkay"
import { StyledHeader, StyledMain } from "./styles"

const Home = () => {
    return(
        <StyledMain>
            <StyledHeader>
                <LogoTunkay/>
                <BtnPrimary text="INICIAR SESION"/>
            </StyledHeader>
            <div>

            </div>
        </StyledMain>
    )
}

export default Home
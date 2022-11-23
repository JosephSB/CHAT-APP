import BtnPrimary from "@/components/buttons/BtnPrimary"
import LogoTunkay from "@/components/LogoTunkay"
import HandleLink from "@/containers/HandleLink"
import ContextAuth from "@/contexts/Auth.context"
import { StyledHeader, StyledMain } from "./styles"

const Home = () => {
    const { dataUser } = ContextAuth();

    return(
        <StyledMain>
            <StyledHeader>
                <LogoTunkay/>
                {
                    dataUser.auth
                    ? <HandleLink href="/app" children={<BtnPrimary text="START"/>}/>
                    : <HandleLink href="/login" children={<BtnPrimary text="INICIAR SESION"/>}/>
                }
            </StyledHeader>
            <div>

            </div>
        </StyledMain>
    )
}

export default Home
import BtnPrimary from "@/components/buttons/BtnPrimary"
import LogoTunkay from "@/components/LogoTunkay"
import InputPassword from "../components/inputs/InputPassword"
import { StyledForm, StyledMain, StyledMainForm } from "../styles"

const Login = () => {
    return(
        <StyledMain>
            <StyledMainForm>
                <LogoTunkay/>
                <p>Accede con tu cuenta</p>
                <StyledForm>
                    <input 
                        placeholder="Email"
                        className="form-input" 
                        type="email" 
                        name="email" 
                    />
                    <InputPassword 
                        placeholder="Password"
                        style="form-input" 
                        value={"sads"}
                        name="password" 
                     />
                    <BtnPrimary text="INICIAR SESION"/>
                </StyledForm>
            </StyledMainForm>
        </StyledMain>
    )
}

export default Login
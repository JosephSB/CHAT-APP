import BtnPrimary from "@/components/buttons/BtnPrimary"
import SimpleLoader from "@/components/loaders/SimpleLoader"
import LogoTunkay from "@/components/LogoTunkay"
import config from "@/config"
import HandleLink from "@/containers/HandleLink"
import useForm from "@/hooks/useForm"
import { ValidateUsername } from "@/utils/Validator.util"
import Cookies from "js-cookie"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import InputPassword from "../components/inputs/InputPassword"
import { IFormLogin } from "../interfaces/Auth.interfaces"
import { EPLogin } from "../services/Auth.services"
import { StyledForm, StyledMain, StyledMainForm } from "../styles"

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState({ error: false, msg: "" });
    const [loading, setLoading] = useState(false);
    const { form, handleForm } = useForm<IFormLogin>({
        email: "",
        password: "",
    })

    const sendForm = (e: React.FormEvent) => {
        e.preventDefault()
        if (!ValidateUsername(form.email)) setError({ error: true, msg: "Email Invalido" })
        if (!ValidateUsername(form.password)) setError({ error: true, msg: "Password Invalido" })
        if (error.error) return

        setLoading(true)
        EPLogin(form)
            .then((resp) => {
                if (resp.status === 200) {
                    Cookies.set(config.TOKEN_AUTH, resp.data.token)
                    navigate(0)
                }
            })
            .catch(() => setError({ error: true, msg: "Ups Ocurrio un Error" }))
            .finally(() => setLoading(false))
    }

    if(loading){
        return (
            <StyledMain>
                <StyledMainForm>
                    <LogoTunkay />
                    <SimpleLoader/>
                </StyledMainForm>
            </StyledMain>
        )
    }

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
                        onChange={handleForm}
                        value={form.email}
                    />
                    <InputPassword 
                        handleChange={handleForm}
                        placeholder="Password"
                        style="form-input" 
                        value={form.password}
                        name="password" 
                     />
                     {error.error && <p className="Text-Error"> {error.msg} </p>}
                    <BtnPrimary action={sendForm} text="INICIAR SESION"/>
                </StyledForm>
                <p>¿No tienes cuenta?, <HandleLink href="/register"><strong>Registrate</strong></HandleLink></p>
            </StyledMainForm>
        </StyledMain>
    )
}

export default Login
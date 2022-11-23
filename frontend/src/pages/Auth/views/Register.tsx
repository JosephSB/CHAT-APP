import BtnPrimary from "@/components/buttons/BtnPrimary"
import LogoTunkay from "@/components/LogoTunkay"
import HandleLink from "@/containers/HandleLink"
import useForm from "@/hooks/useForm"
import InputPassword from "../components/inputs/InputPassword"
import { StyledForm, StyledMain, StyledMainForm } from "../styles"
import { IFormRegister } from "@/pages/Auth/interfaces/Auth.interfaces"
import { ValidateEmail, ValidatePassword, ValidateUsername } from "@/utils/Validator.util"
import { useState } from "react"
import { EPRegister } from "../services/Auth.services"
import { useNavigate } from "react-router-dom"
import SimpleLoader from "@/components/loaders/SimpleLoader"

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState({ error: false, msg: "" });
    const [loading, setLoading] = useState(false);
    const { form, handleForm } = useForm<IFormRegister>({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    })

    const sendForm = (e: React.FormEvent) => {
        e.preventDefault()
        if (!ValidateUsername(form.username)) setError({ error: true, msg: "Username Invalido" })
        if (!ValidateEmail(form.email)) setError({ error: true, msg: "Email Invalido" })
        if (!ValidatePassword(form.password, form.confirmPassword)) setError({ error: true, msg: "Contraseña Invalida" })
        if (error.error) return
        setLoading(true)
        EPRegister(form)
            .then((resp) => {
                if (resp.status === 200) {
                    navigate("/login")
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

    return (
        <StyledMain>
            <StyledMainForm>
                <LogoTunkay />
                <p>Registrate para poder acceder a nuestro servicio</p>
                <StyledForm>
                    <input
                        onChange={handleForm}
                        placeholder="Email"
                        className="form-input"
                        value={form.email}
                        type="email"
                        name="email"
                    />
                    <input
                        onChange={handleForm}
                        placeholder="Username"
                        className="form-input"
                        type="text"
                        name="username"
                        value={form.username}
                    />
                    <InputPassword
                        handleChange={handleForm}
                        placeholder="Password"
                        style="form-input"
                        value={form.password}
                        name="password"
                    />
                    <InputPassword
                        handleChange={handleForm}
                        placeholder="Repeat Password"
                        style="form-input"
                        value={form.confirmPassword}
                        name="confirmPassword"
                    />
                    {error.error && <p className="Text-Error"> {error.msg} </p>}
                    <BtnPrimary action={sendForm} text="REGISTRATE" />
                </StyledForm>
                <p>¿Ya tienes cuenta?, <HandleLink href="/login"><strong>Incia Sesion</strong></HandleLink></p>
            </StyledMainForm>
        </StyledMain>
    )
}

export default Register
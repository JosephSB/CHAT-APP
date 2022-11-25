import BtnPrimary from "@/components/buttons/BtnPrimary"
import { logout } from "@/services/Auth.services"
import { COLOR_EXIT } from "@/styled-components/variables"
import { useNavigate } from "react-router-dom";

const BtnExit = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        logout()
        navigate(0)
    }

    return(
        <BtnPrimary action={handleClick} text="CERRAR SESION" color={COLOR_EXIT} />
    )
}

export default BtnExit
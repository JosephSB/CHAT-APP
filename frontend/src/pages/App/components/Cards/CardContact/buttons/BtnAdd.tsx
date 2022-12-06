import { PRIMARY_COLOR } from "@/styled-components/variables"
import { StyledButtonCardContact } from "../styles"

const BtnAdd = () => {
    return(
        <StyledButtonCardContact color={PRIMARY_COLOR}>
            <i className="fas fa-user-plus"/>&nbsp;AÑADIR
        </StyledButtonCardContact>
    )
}

export default BtnAdd
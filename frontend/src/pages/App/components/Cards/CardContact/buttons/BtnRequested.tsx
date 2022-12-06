import { COLOR_WAIT } from "@/styled-components/variables"
import { StyledButtonCardContact } from "../styles"

const BtnRequested = () => {
    return(
        <StyledButtonCardContact color={COLOR_WAIT}>
            <i className="fas fa-user-clock"/>&nbsp;SOLICITADO
        </StyledButtonCardContact>
    )
}

export default BtnRequested
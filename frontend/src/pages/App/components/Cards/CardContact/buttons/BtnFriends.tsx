import { PRIMARY_COLOR } from "@/styled-components/variables"
import { StyledButtonCardContact } from "../styles"

const BtnFriends = () => {
    return(
        <StyledButtonCardContact color={PRIMARY_COLOR}>
            <i className="fas fa-user-friends"/>&nbsp;AMIGOS
        </StyledButtonCardContact>
    )
}

export default BtnFriends
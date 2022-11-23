import React from "react"
import { StyledBtnPrimary } from "./styles"

interface props {
    text: string
    action?: (e: React.FormEvent<HTMLButtonElement>) => void
    color ?: string
    textcolor ?: string
}

const BtnPrimary = ({text, action, color,textcolor}:props) => {
    return(
        <StyledBtnPrimary color={color} txtcolor={textcolor} onClick={action}>
            {text}
        </StyledBtnPrimary>
    )
}

export default BtnPrimary
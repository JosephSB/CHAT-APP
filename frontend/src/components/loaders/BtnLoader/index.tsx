import { StyledBtnLoader } from "./styles"

interface props {
    color?: string
}

const BtnLoader = ({color}:props) => {
    return(
        <StyledBtnLoader color={color}>
            <span className="loader"/>
        </StyledBtnLoader>
    )
}

export default BtnLoader
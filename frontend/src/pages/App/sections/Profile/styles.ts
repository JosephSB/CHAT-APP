import { BG_COLOR } from "@/styled-components/variables";
import styled from "styled-components";

export const StyledAside = styled.div`
    width: 100%;
    min-height: 100vh;
`

export const StyledHeader = styled.header`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${BG_COLOR};
    p{
        margin: 0;
        font-size: 22px;
        font-weight: bold;
    }
    i{
        cursor: pointer;
    }
`

export const StyledBody = styled.div`
    width: 100%;
    .profile-boxImg{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }
    .profile-img{
        border-radius: 50%;
    }
`
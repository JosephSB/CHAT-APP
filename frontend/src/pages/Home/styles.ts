import { PRIMARY_COLOR,BG_COLOR, TEXT_COLOR } from "@/styled-components/variables";
import styled from "styled-components";

export const StyledMain = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${BG_COLOR};
    color: ${TEXT_COLOR};
`

export const StyledHeader = styled.header`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        background-color: ${PRIMARY_COLOR};
        color: ${TEXT_COLOR};
        padding: 1rem 2rem;
        border-radius: 5px;
        font-size: 12px;
        cursor: pointer;
    }
`
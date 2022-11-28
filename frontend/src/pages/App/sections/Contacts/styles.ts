import { BG_COLOR, TEXT_COLOR } from "@/styled-components/variables";
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
`

export const StyledMainTabs = styled.ul`
    width: 100%;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    li{
        display: flex;
        padding: 0.5rem;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        cursor: pointer;
    }
    .active{
        border-bottom: 1px solid ${TEXT_COLOR};
    }
`

export const StyledMainSearch = styled.div`
    width: 100%;
    padding: 0.5rem;
`
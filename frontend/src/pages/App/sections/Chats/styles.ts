import { OTHER_TEXT_COLOR, TEXT_COLOR } from "@/styled-components/variables";
import styled from "styled-components";

export const StyledAside = styled.div`
    width: 100%;
    min-height: 100vh;
`

export const StyledHeader = styled.header`
    width: 100%;
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 80% 20%;
`

export const StyledHeaderInfo = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 20% 80%;
    justify-content: center;
    align-items: center;
    .header-img{
        border-radius: 50%;
    }
    .header-title{
        font-size: 12px;
        font-weight: bold;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`

export const StyledHeaderButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    i{
        cursor: pointer;
    }
`

export const StyledContainerSearch = styled.div`
    width: 100%;
    padding: 0.5rem 1rem;
    .search-input{
        width: 100%;
        background-color: ${TEXT_COLOR};
        color: ${OTHER_TEXT_COLOR};
        display: grid;
        grid-template-columns: 10% 90%;
        justify-content: center;
        align-items: center;
        padding: 0.3rem;
        border-radius: 5px;
        input{
            border: none;
            outline: none;
        }
    }
    .search-btn{
        font-size: 12px; 
        text-align: end;
        cursor: pointer;
    }
`
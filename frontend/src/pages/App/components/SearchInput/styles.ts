import { OTHER_TEXT_COLOR, TEXT_COLOR } from "@/styled-components/variables";
import styled from "styled-components";

export const StyledSearchInput = styled.div`
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
    
`
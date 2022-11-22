import { PRIMARY_COLOR,BG_COLOR, TEXT_COLOR } from "@/styled-components/variables";
import styled from "styled-components";

export const StyledMain = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${BG_COLOR};
    color: ${TEXT_COLOR};
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
`

export const StyledMainForm = styled.div`
    width: 100%;
    max-width: 300px;   
    text-align: center;
    padding: 1rem 0;
    
`

export const StyledForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    .form-input{
        padding: 0.8rem;
        margin: 5px 0;
        width: 100%;
        outline: none;
        border: none;
        border-radius: 5px;
    }
`
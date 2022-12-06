import { COLOR_SUCCESSFUL, TEXT_COLOR } from "@/styled-components/variables";
import styled from "styled-components";

export const StyledCardContact = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50px 3fr 80px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin: 10px 0;
    .cardContact-img{
        border-radius: 50%;
    }
`

export const StyledBodyCardContact = styled.div`
    width: 100%;
    .title{
        font-size: 14px;
        font-weight: bold;
        margin: 5px 0;
    }
    .subtitle{
        font-size: 12px;
        margin: 5px 0;
    }
`

export const StyledButtonCardContact = styled.button`
    width: 100%;
    height: 30px;
    background-color: ${ (props) => props.color ? props.color : COLOR_SUCCESSFUL};
    padding: 0.2rem;
    font-size: 10px; 
    color: ${TEXT_COLOR};
    cursor: pointer;
    border-radius: 5px;
`
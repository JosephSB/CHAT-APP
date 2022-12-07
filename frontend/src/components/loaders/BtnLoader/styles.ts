import { COLOR_SUCCESSFUL, TEXT_COLOR } from "@/styled-components/variables";
import styled from "styled-components";

export const StyledBtnLoader = styled.div`
    width: 100%;
    height: 30px;
    background-color: ${ (props) => props.color ? props.color : COLOR_SUCCESSFUL};
    padding: 0.2rem;
    font-size: 10px; 
    color: ${TEXT_COLOR};
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    .loader {
        width: 20px;
        height: 20px;
        border: 5px solid #FFF;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }
    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
`
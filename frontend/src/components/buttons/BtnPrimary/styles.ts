import styled from "styled-components";
import { PRIMARY_COLOR, TEXT_COLOR } from "@/styled-components/variables";

interface Props {
    color: string | undefined
    txtcolor: string | undefined
}

export const StyledBtnPrimary = styled.button<Props>`
    background-color: ${ (props) =>  props.color  ? props.color : PRIMARY_COLOR};
    color: ${ (props) =>  props.txtcolor  ? props.txtcolor : TEXT_COLOR};
    padding: 0.8rem 1rem;
    border-radius: 5px;
    margin: 5px 0;
    cursor: pointer;
    font-size: 12px;
    transition: scale .2s;
    border: none;
    &:hover{
        scale: 1.02;
    }
`
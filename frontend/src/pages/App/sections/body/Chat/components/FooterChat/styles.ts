import { PRIMARY_COLOR, TEXT_COLOR } from "@/styled-components/variables";
import styled from "styled-components";

export const StyledFooterChat = styled.div`
    width: 100%;
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 30px 30px 1fr 50px;
    gap: 5px;
    justify-content: center;
    align-items: center;
    i{
        cursor: pointer;
        text-align: center;
    }
    .inputSMS{
        width: 100%;
        padding: 0.6rem;
        border-radius: 5px;
        outline: none;
        border: none;
    }
`

export const StyledBtnSendSMS = styled.button`
    width: 35px;
    height: 35px;
    background-color: ${PRIMARY_COLOR};
    cursor: pointer;
    color: ${TEXT_COLOR};
    border-radius: 50%;
    display: inline-block;
    margin: 0 auto;
    border: none;
`
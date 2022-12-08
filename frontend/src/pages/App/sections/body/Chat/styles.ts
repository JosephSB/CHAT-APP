import { PRIMARY_COLOR, TEXT_COLOR } from "@/styled-components/variables";
import styled from "styled-components";

export const StyledMainChat = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 100px 1fr 80px;
`

export const StyledHeaderChat = styled.header`
    width: 100%;
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 60px 1fr;
    align-items: center;
    justify-content: flex-start;
    .header-img{
        border-radius: 50%;
    }
    p{
        margin: 0;
        font-weight: bold;
    }
`

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
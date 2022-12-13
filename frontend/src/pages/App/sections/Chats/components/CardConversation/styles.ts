import styled from "styled-components";

export const StyledCardConversation = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50px 3fr 80px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin: 10px 0;
    cursor: pointer;
    .cardContact-img{
        border-radius: 50%;
    }
`

export const StyledBodyCardConversation = styled.div`
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
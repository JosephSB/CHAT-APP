import styled from "styled-components";

export const StyledMainChat = styled.div`
    width: 100%;
    height: 100vh;
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

export const StyledBodyChat = styled.div`
    width: 100%;
    height:100%;
    overflow-y: auto;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

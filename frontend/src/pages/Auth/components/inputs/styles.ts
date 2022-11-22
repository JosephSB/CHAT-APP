import styled from "styled-components";

export const StyledContainerInput = styled.div`
    width: 100%;
    position: relative;
    input{
        padding-right: 10px;
    }
    i{
        color: black;
    }
    .password-visible{
        position: absolute;
        top: 18px;
        right: 5px;
        cursor: pointer;
    }
`
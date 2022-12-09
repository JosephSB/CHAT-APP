import { SECONDARY_COLOR } from "@/styled-components/variables";
import styled from "styled-components";


export const StyledContainerBubbleMsg = styled.div`
    width: 100%;
    margin: 5px 0;
    display: flex;
    justify-content: ${ (props) => props.datatype === "left" ? "flex-start" : "flex-end"  } ;
    align-items: center;
`

export const StyledBubbleMsg = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr;
    gap: 5px;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 300px;
    .header-img{
        border-radius: 50%;
    }
`

export const StyledBubbleReverseMsg = styled(StyledBubbleMsg)`
    grid-template-columns: 1fr 50px;
`

export const StyledBodyBubbleMsg = styled.div`
    width: 100%;
    background-color: ${ (props) => props.color ? props.color: SECONDARY_COLOR };
    border-radius: 5px;
    padding: 0.2rem;
    position: relative;
    p{
        margin: 5px;
    }
    .title{
        font-weight: bold;
        font-size: 14px;
    }
    .description{
        font-size: 12px;
    }
    .time{
        font-size: 8px;
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.3rem;
    }
`
import { BG_COLOR, SECONDARY_COLOR, TEXT_COLOR } from "@/styled-components/variables";
import styled from "styled-components";

export const StyledMain = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${BG_COLOR};
    color: ${TEXT_COLOR};
    display: grid;
    grid-template-columns: 1fr 3.4fr;
`

export const StyledAside = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${SECONDARY_COLOR};
`

export const StyledBody = styled.div`
    width: 100%;
    height: 100%;
`
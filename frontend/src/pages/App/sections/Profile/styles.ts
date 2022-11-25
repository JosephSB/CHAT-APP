import { BG_COLOR, PRIMARY_COLOR, TEXT_COLOR } from "@/styled-components/variables";
import styled from "styled-components";

export const StyledAside = styled.div`
    width: 100%;
    min-height: 100vh;
`

export const StyledHeader = styled.header`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${BG_COLOR};
    p{
        margin: 0;
        font-size: 22px;
        font-weight: bold;
    }
    i{
        cursor: pointer;
    }
`

export const StyledBody = styled.div`
    width: 100%;
    .profile-boxImg{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }
    .profile-img{
        border-radius: 50%;
    }
    .profile-box{
        width: 100%;
        background-color: ${BG_COLOR};
        margin: 10px 0;
        padding: 0.5rem 1rem;
        .profile-boxTitle{
            font-size: 10px;
            margin: 5px 0;
        }
    }
    .profile-containerImg{
        position: relative;
    }
    .profile-btnEditPhoto{
        position: absolute;
        right:0;
        bottom: 0;
        margin: 1rem;
        background-color: ${PRIMARY_COLOR};
        color: ${TEXT_COLOR};
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        cursor: pointer;
        justify-content:center;
        align-items: center;
    }
    .profile-boxEdit{
        width: 100%;
        display: grid;
        grid-template-columns: 90% 10%;
        justify-content: center;
        align-items: center;
        p{
            margin: 5px 0;
        }
        .profile-boxText{
            font-size: 16px;
            font-weight: bold;
            text-overflow: ellipsis;
            overflow: hidden;
            text-transform: uppercase;
            white-space: nowrap;
        }
        .profile-boxDescription{
            font-size: 12px;
            font-weight: bold;
        }
        i{
            cursor: pointer;
        }
    }
    .profile-boxEditActive{
        width: 100%;
        display: grid;
        grid-template-columns: 80% 20%;
        justify-content: center;
        align-items: center;
        &-input{
            background-color: transparent;
            color: ${TEXT_COLOR};
            outline: none;
            border: none;
            padding: 0.4rem;
            border-bottom: 1px solid ${TEXT_COLOR};
        }
        &-btns{
            width: 100%;
            display : flex;
            justify-content: space-around;
            i{
                cursor: pointer;
            }
        }
    }
    .profile-footer{
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
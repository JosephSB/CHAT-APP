import { PRIMARY_COLOR } from "@/styled-components/variables"
import { createUrlStorage } from "@/utils/Storage.util"
import Avatar from "react-avatar"
import { StyledBodyBubbleMsg, StyledBubbleMsg, StyledBubbleReverseMsg, StyledContainerBubbleMsg } from "./styles"

interface props {
    orientation: "left" | "rigth"
    username: string
    urlImg?: string
    message: string
    time: Date
}

const BubbleMsg = ({urlImg,username,message,time,orientation}:props) => {


    if(orientation === "rigth"){
        return(
            <StyledContainerBubbleMsg datatype={orientation} >
                <StyledBubbleReverseMsg>
                    <StyledBodyBubbleMsg color={PRIMARY_COLOR} >
                        <p className="title">{username}</p>
                        <p className="description"> {message} </p>
                        <span className="time"> {new Date(time).toLocaleDateString("es-PE")} </span>
                    </StyledBodyBubbleMsg>
                    <Avatar
                        className='header-img' 
                        src={urlImg ?  createUrlStorage(urlImg,50, "users") : username} 
                        size='50' 
                        name={username} 
                    />
                </StyledBubbleReverseMsg>
            </StyledContainerBubbleMsg>
        )
    }

    return(
        <StyledContainerBubbleMsg datatype={orientation} >
            <StyledBubbleMsg>
                <Avatar
                    className='header-img' 
                    src={urlImg ?  createUrlStorage(urlImg,50, "users") : username} 
                    size='50' 
                    name={username} 
                />
                <StyledBodyBubbleMsg>
                    <p className="title">{username}</p>
                    <p className="description"> {message} </p>
                    <span className="time"> {new Date(time).toLocaleDateString("es-PE")} </span>
                </StyledBodyBubbleMsg>
            </StyledBubbleMsg>
        </StyledContainerBubbleMsg>
    )
}

export default BubbleMsg
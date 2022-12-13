import ContextRouter from "@/pages/App/contexts/Router.context"
import ContextWebSocket from "@/pages/App/contexts/Websocket.context"
import { IProfile } from "@/pages/App/interfaces/Profile.interface"
import { createUrlStorage } from "@/utils/Storage.util"
import Avatar from "react-avatar"
import { StyledBodyCardConversation, StyledCardConversation } from "./styles"

interface props {
    data: Pick<IProfile, "description"| "user_id" | "username" | "url_photo" > | undefined
}
const CardConversation = ({data}:props) => {
    const {handleData} = ContextWebSocket();
    const {handleBodyRoute} = ContextRouter();

    const handleClick = () => {
        handleData("anotherUser", {
            user_id: data?.user_id, 
            url_photo: data?.url_photo ,
            username: data?.username
        })
        handleBodyRoute(1)
    }

    if(!data) return <></>

    return(
        <StyledCardConversation onClick={handleClick}>
            <Avatar 
                className='cardContact-img' 
                src={
                    data?.url_photo?.length === 0 ? data.username : createUrlStorage(data.url_photo,50, "users")
                } 
                size='50' 
                name={data.username} 
            />
            <StyledBodyCardConversation>
                <p className="title"> {data.username} </p>
            </StyledBodyCardConversation>
        </StyledCardConversation>
    )
}

export default CardConversation
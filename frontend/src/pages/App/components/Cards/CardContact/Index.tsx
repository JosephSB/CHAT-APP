import ContextRouter from "@/pages/App/contexts/Router.context"
import ContextWebSocket from "@/pages/App/contexts/Websocket.context"
import { IProfile } from "@/pages/App/interfaces/Profile.interface"
import { createUrlStorage } from "@/utils/Storage.util"
import Avatar from "react-avatar"
import RouterButtons from "./buttons"
import { StyledBodyCardContact, StyledCardContact } from "./styles"

interface props {
    data: IProfile
}

const CardContact = ({data}:props) => {
    const {handleData} = ContextWebSocket();
    const {handleBodyRoute} = ContextRouter();

    const handleClick = () => {
        handleData("anotherUser", data.user_id)
        handleBodyRoute(1)
    }

    return(
        <StyledCardContact onClick={handleClick}>
            <Avatar 
                className='cardContact-img' 
                src={
                    data?.url_photo?.length === 0 ? data.username : createUrlStorage(data.url_photo,50, "users")
                } 
                size='50' 
                name={data.username} 
            />
            <StyledBodyCardContact>
                <p className="title"> {data.username} </p>
                <p className="subtitle"> {data.description} </p>
            </StyledBodyCardContact>
            <RouterButtons userID={data.user_id} />
        </StyledCardContact>
    )
}

export default CardContact
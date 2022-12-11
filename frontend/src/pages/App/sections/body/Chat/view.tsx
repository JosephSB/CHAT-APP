import {useEffect} from "react"
import ContextDataProfile from "@/pages/App/contexts/DataProfile.context";
import { IDetailChat } from "@/pages/App/interfaces/Chat.interfaces";
import { createUrlStorage } from "@/utils/Storage.util";
import Avatar from "react-avatar";
import { StyledBodyChat, StyledHeaderChat, StyledMainChat } from "./styles";
import ContextWebSocket from "@/pages/App/contexts/Websocket.context";
import FooterChat from "./components/FooterChat";
import ListMessages from "./components/ListMessages";

interface props{
    data: IDetailChat
}

const ViewBodyChat = ({data}:props) => {
    const {dataUser} = ContextDataProfile();
    const {handleRoom} = ContextWebSocket();
    
    useEffect(() => {
        handleRoom(data.conversation_id)
    }, []);

    return(
        <StyledMainChat>
            <StyledHeaderChat>
                {
                    data.users.map( (user) => {
                        if(user.user_id === dataUser.user_id) return;
                        return(
                            <>
                                <Avatar
                                    className='header-img' 
                                    src={user.url_photo ? createUrlStorage(user.url_photo,50, "users") : user.username} 
                                    size='50' 
                                    name={user.username} 
                                />
                                <p>{user.username}</p>
                            </>
                        )
                    } )
                }
            </StyledHeaderChat>
            <StyledBodyChat>
                <ListMessages/>
            </StyledBodyChat>
            <FooterChat/>
        </StyledMainChat>
    )
}

export default ViewBodyChat
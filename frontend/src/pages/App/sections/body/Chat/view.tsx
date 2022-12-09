import {useEffect} from "react"
import ContextDataProfile from "@/pages/App/contexts/DataProfile.context";
import { IDetailChat } from "@/pages/App/interfaces/Chat.interfaces";
import { createUrlStorage } from "@/utils/Storage.util";
import Avatar from "react-avatar";
import BubbleMsg from "./components/BubbleMsg";
import { StyledBodyChat, StyledBtnSendSMS, StyledFooterChat, StyledHeaderChat, StyledMainChat } from "./styles";
import ContextWebSocket from "@/pages/App/contexts/Websocket.context";

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
                <BubbleMsg username="pepe" orientation="left" time={new Date()} message="ok daddy" />
                <BubbleMsg username="josephsb" orientation="rigth" time={new Date()} message="ok daddy" />
            </StyledBodyChat>
            <StyledFooterChat>
                <i className="fas fa-icons"></i>
                <i className="fas fa-images"></i>
                <input className="inputSMS" placeholder="Escribe tu mensaje" type="text" name="sms" />
                <StyledBtnSendSMS>
                    <i className="fas fa-paper-plane"></i>
                </StyledBtnSendSMS>
            </StyledFooterChat>
        </StyledMainChat>
    )
}

export default ViewBodyChat
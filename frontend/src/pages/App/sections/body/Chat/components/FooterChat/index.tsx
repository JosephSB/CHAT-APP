import ContextDataProfile from "@/pages/App/contexts/DataProfile.context";
import ContextWebSocket from "@/pages/App/contexts/Websocket.context";
import { useState } from "react";
import { StyledBtnSendSMS, StyledFooterChat } from "./styles"

const FooterChat = () => {
    const {dataUser} = ContextDataProfile();
    const {client, data} = ContextWebSocket();
    const [msg, setMsg] = useState("");

    const sendMsg = () => {
        if(!client) return
        client.emit('message',{
            conversationID: data.conversationID,
            user_id: dataUser.user_id,
            message: msg,
            time: new Date()
        })
        setMsg("")
    }

    return(
        <StyledFooterChat>
            <i className="fas fa-icons"></i>
            <i className="fas fa-images"></i>
            <input 
                value={msg}
                onChange={(e) => setMsg(e.currentTarget.value)}
                className="inputSMS" 
                placeholder="Escribe tu mensaje" 
                onKeyUp={(e) => e.key === "Enter" && sendMsg()}
                type="text"
            />
            <StyledBtnSendSMS onClick={sendMsg}>
                <i className="fas fa-paper-plane"></i>
            </StyledBtnSendSMS>
        </StyledFooterChat>
    )
}

export default FooterChat
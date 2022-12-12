import SimpleLoader from "@/components/loaders/SimpleLoader";
import ContextDataProfile from "@/pages/App/contexts/DataProfile.context";
import ContextWebSocket from "@/pages/App/contexts/Websocket.context";
import { IPreviusMessage } from "@/pages/App/interfaces/Chat.interfaces";
import { getPreviusMessages } from "@/pages/App/services/Chat.service";
import { useState } from "react";
import { useQuery } from "react-query";
import BubbleMsg from "../BubbleMsg";

const ListPreviusMessages = () => {
    const {dataUser} = ContextDataProfile();
    const dataSocket = ContextWebSocket();
    const [pag, setPag] = useState(1);
    const { data, isError, isLoading } = useQuery<IPreviusMessage[]>('PreviusMessages', () => getPreviusMessages(dataSocket.data.conversationID,pag))
    
    if(isLoading){
        return(
            <SimpleLoader/>
        )
    }

    if(!data || isError){
        return(
            <SimpleLoader/>
        )
    }
    
    return(
        <>
            {
                data.map( (msg) => {
                    return <BubbleMsg
                        key={msg.messages.message_id} username={msg.user[0].username} 
                        urlImg={msg.user[0].url_photo}
                        orientation={dataUser.user_id === msg.user[0].user_id ? "rigth": "left"}
                        time={msg.messages.daty_sent} message={msg.messages.message} 
                        />
                } )
            }
        </>
    )
}

export default ListPreviusMessages
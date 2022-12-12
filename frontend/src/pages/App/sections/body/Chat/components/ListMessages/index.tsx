import ContextDataProfile from "@/pages/App/contexts/DataProfile.context";
import ContextWebSocket from "@/pages/App/contexts/Websocket.context";
import { IMessage, IMessageWithOrientation } from "@/pages/App/interfaces/Chat.interfaces";
import { useEffect, useState } from "react";
import BubbleMsg from "../BubbleMsg";

const ListMessages = () => {
    const {dataUser} = ContextDataProfile();
    const {client, data} = ContextWebSocket();
    const [listMsgs, setListMsgs] = useState<IMessageWithOrientation[]>([]);

    useEffect(() => {
        if(!client) return
        client.on('new message',(data:IMessage)=>{
            let sms:IMessageWithOrientation = {
                ...data,
                orientation: dataUser.user_id === data.user_id ? "rigth" : "left",
            }

            setListMsgs((msj) => [...msj, sms])
            //scrollToBottom()
        })
    }, []);

    return(
        <>
            {
                listMsgs.map( (msg) => {
                    if(msg.user_id === dataUser.user_id) {
                        return <BubbleMsg 
                        key={dataUser.user_id} username={dataUser.username} 
                        urlImg={dataUser.url_photo}
                        orientation="rigth" time={msg.time} message={msg.message} />
                    }
                    return <BubbleMsg 
                        key={data.anotherUser.user_id} username={data.anotherUser.username} 
                        urlImg={data.anotherUser.url_photo}
                        orientation="left" time={msg.time} message={msg.message} />
                } )
            }
        </>
    )
}

export default ListMessages
import SimpleLoader from "@/components/loaders/SimpleLoader";
import ContextWebSocket from "@/pages/App/contexts/Websocket.context";
import { IDetailChat } from "@/pages/App/interfaces/Chat.interfaces";
import { getDetailChat } from "@/pages/App/services/Chat.service";
import { useEffect, useState } from "react";
import { StyledMainChat } from "./styles"
import ViewBodyChat from "./view";

const BodyChat = () => {
    const  dataSocket = ContextWebSocket();
    const [detailChat, setDetailChat] = useState<IDetailChat>();
    const [data, setData] = useState({
        isError: false, 
        isLoading: false
    });

    const fetchData = () => {
        setData({...data, "isLoading": true })
        getDetailChat(dataSocket.data.anotherUser.user_id)
            .then( (resp) => {
                if(resp.status === 200) setDetailChat(resp.data.data)
                else setData({...data, "isError": true })
            } )
            .catch( () => setData({...data, "isError": true }) )
            .finally( () => setData({...data, "isLoading": false }) )
    }

    useEffect(() => {
        fetchData()
    }, [dataSocket.data.anotherUser.user_id]);

    if(data.isLoading){
        return(
            <StyledMainChat>
                <SimpleLoader/>
                <h1>CARGANDO CHAT</h1>
            </StyledMainChat>
        )
    }

    if(!detailChat || Object.keys(detailChat).length === 0  || data.isError){
        return(
            <StyledMainChat>
                <h1>USTEDES NO SON AMIGOS</h1>
            </StyledMainChat>
        )
    }

    return(
        <ViewBodyChat data={detailChat}/>
    )
}

export default BodyChat
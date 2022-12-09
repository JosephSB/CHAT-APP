import SimpleLoader from "@/components/loaders/SimpleLoader";
import ContextWebSocket from "@/pages/App/contexts/Websocket.context";
import { IDetailChat } from "@/pages/App/interfaces/Chat.interfaces";
import { getDetailChat } from "@/pages/App/services/Chat.service";
import { useQuery } from "react-query";
import { StyledMainChat } from "./styles"
import ViewBodyChat from "./view";

const BodyChat = () => {
    const  dataSocket = ContextWebSocket();
    const { data, isError, isLoading } = useQuery<IDetailChat>('DetailChat', () => getDetailChat(dataSocket.data.anotherUser))

    
    if(isLoading){
        return(
            <StyledMainChat>
                <SimpleLoader/>
                <h1>CARGANDO CHAT</h1>
            </StyledMainChat>
        )
    }

    if(!data?.users || isError){
        return(
            <StyledMainChat>
                <h1>USTEDES NO SON AMIGOS</h1>
            </StyledMainChat>
        )
    }

    return(
        <ViewBodyChat data={data}/>
    )
}

export default BodyChat
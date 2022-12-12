import io,{Socket} from 'socket.io-client'
import { createContext, useContext, useEffect, useState } from "react";
import config from '@/config';
import { IProfile } from '../interfaces/Profile.interface';

interface WebSocketInterface {
    handleRoom: (newRoom: string) => void,
    handleData: (key: string, value: any) => void,
    data: DataSocket,
    client: Socket | undefined
}

interface DataSocket {
    conversationID: string
    anotherUser: Pick<IProfile, "username" | "user_id" | "url_photo" >
}

const INIT_DATA_SOCKET = {
    conversationID: "",
    anotherUser: {
        user_id: "", 
        url_photo: "",
        username: ""
    }
}

const WebSocketContext = createContext<WebSocketInterface>(
    {
        handleRoom: () => {},
        handleData: () => {},
        data: INIT_DATA_SOCKET,
        client: undefined
    }
);

interface Props {
    children: JSX.Element | JSX.Element[]
}

const WebSocketContextProvider = ({ children }: Props) => {
    const [data, setData] = useState<DataSocket>(INIT_DATA_SOCKET);
    const client = io(config.SOCKET_MSG, {path: config.PATH_SOCKET_MSG}) 
    
    const handleRoom = (newRoom: string) => {
        if(data.conversationID !== "" ) client.emit('leaveRoom',{ conversationID: data.conversationID })
        client.emit('joinRoom',{ conversationID: newRoom })
        //setData({...data, "conversationID": newRoom})
    }

    const handleData = (key: string, value: any) => {
        setData({...data, [key]: value})
    }

    useEffect(() => {
        return function cleanup() {
            client.emit('leaveRoom',{ conversationID: data.conversationID })
          };
    }, []);

    return (
        <WebSocketContext.Provider value={
            {
                handleRoom,
                handleData,
                data,
                client
            }
        }>
            {children}
        </WebSocketContext.Provider>
    )
}


export { WebSocketContextProvider };

const ContextWebSocket = () => {
    return useContext(WebSocketContext);
}

export default ContextWebSocket;
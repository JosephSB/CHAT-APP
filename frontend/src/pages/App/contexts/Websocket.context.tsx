import io from 'socket.io-client'
import { createContext, useContext, useEffect, useState } from "react";
import config from '@/config';

interface WebSocketInterface {
    handleRoom: (newRoom: string) => void,
    handleData: (key: string, value: any) => void,
    data: DataSocket
}

interface DataSocket {
    conversationID: string
    anotherUser: string
}

const INIT_DATA_SOCKET = {
    conversationID: "",
    anotherUser: ""
}

const WebSocketContext = createContext<WebSocketInterface>(
    {
        handleRoom: () => {},
        handleData: () => {},
        data: INIT_DATA_SOCKET
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
        setData({...data, "conversationID": newRoom})
    }

    const handleData = (key: string, value: any) => {
        setData({...data, [key]: value})
    }

    useEffect(() => {

    }, []);

    return (
        <WebSocketContext.Provider value={
            {
                handleRoom,
                handleData,
                data
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
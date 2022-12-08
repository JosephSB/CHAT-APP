import { saveMessage } from "../../services/conversations/conversations.model";
import { Socket } from "socket.io";
import { INewMessage } from "./types/SocketSms.types";

export const SocketMessages = (socket: Socket) => {
    console.log('a user connected from the app');

    socket.on("joinRoom", (data: {conversationID: string}) => {
        socket.join(data.conversationID)
    })

    socket.on("message", (data:INewMessage) => {
        socket.to(data.conversationID).emit('new message',data)
        //asyn save msg
        saveMessage(data.conversationID, {
            user_id: data.user_id,
            type_message: 0,
            message: data.message,
            daty_sent: data.time
        })
    })

    socket.on("leaveRoom", (data: {conversationID: string}) => {
        socket.leave(data.conversationID)
    })

    socket.on('disconnect', () => {
        console.log('user disconnected from the messages service');
    });
}
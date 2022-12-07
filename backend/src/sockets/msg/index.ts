import { Socket } from "socket.io";

export const SocketMessages = (socket: Socket) => {
    console.log('a user connected from the app');

    socket.on("JoinRoom", (data) => {

    })

    socket.on('disconnect', () => {
        console.log('user disconnected from the messages service');
    });
}
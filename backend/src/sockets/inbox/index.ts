import { Socket } from "socket.io";

export const SocketInbox = (socket: Socket) => {
    console.log('a user connected from service inbox');

    socket.on('disconnect', () => {
        console.log('user disconnected from service inbox');
    });
}
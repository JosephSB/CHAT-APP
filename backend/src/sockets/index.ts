import { Server } from "socket.io";
import http from "http"
import { SocketMessages } from "./msg";
import { SocketInbox } from "./inbox";

export function conectionSockets(server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>) {
    const socket_msg = new Server(server, {
        path: "/api/ws-msg",
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    })
    const socket_inbox = new Server(server, {
        path: "/api/ws-inbox",
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    })

    socket_msg.on('connection', SocketMessages);
    socket_inbox.on('connection', SocketInbox);

    console.log("Sockets conectados :)")
}
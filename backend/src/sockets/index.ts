import { Server } from "socket.io";
import http from "http"
import { SocketMessages } from "./msg";
import { SocketInbox } from "./inbox";
import config from "../config/index";

export function conectionSockets(server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>) {
    const socket_msg = new Server(server, {
        path: "/api/ws-msg",
        cors: {
            origin: config.port_frontend,
            methods: ["GET", "POST"]
        }
    })
    const socket_inbox = new Server(server, {
        path: "/api/ws-inbox",
        cors: {
            origin: config.port_frontend,
            methods: ["GET", "POST"]
        }
    })

    socket_msg.on('connection', SocketMessages);
    socket_inbox.on('connection', SocketInbox);

    console.log("Sockets conectados :)")
}
import express from "express";
import { getChatMessages, getConversations, getDetailConversation } from "./conversations.controller";
const conversationsRouter = express.Router();

conversationsRouter.get("/getDetail/:idAnotherUser", getDetailConversation);
conversationsRouter.get("/getMessages/:idConversation", getChatMessages);
conversationsRouter.get("/getMyConversations", getConversations);

export default conversationsRouter
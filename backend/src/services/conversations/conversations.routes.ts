import express from "express";
import { getChatMessages, getDetailConversation } from "./conversations.controller";
const conversationsRouter = express.Router();

conversationsRouter.get("/getDetail/:idAnotherUser", getDetailConversation);
conversationsRouter.get("/getMessages/:idConversation", getChatMessages);

export default conversationsRouter
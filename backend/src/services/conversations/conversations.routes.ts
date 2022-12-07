import express from "express";
import { getDetailConversation } from "./conversations.controller";
const conversationsRouter = express.Router();

conversationsRouter.get("/getDetail/:idAnotherUser", getDetailConversation);

export default conversationsRouter
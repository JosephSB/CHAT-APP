import ProfileRouter from "../services/Profile/profile.routes";
import express from "express";
import { verifyToken } from "../middlewares/Auth.middleware";
import AuthRouter from "../services/Auth/auth.routes";
import contactsRouter from "../services/contacts/contacts.routes";
import conversationsRouter from "../services/conversations/conversations.routes";

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
    res.send("Api backend chat app");
});

apiRouter.use("/auth", AuthRouter);
apiRouter.use("/profile", verifyToken ,ProfileRouter);
apiRouter.use("/contacts", verifyToken ,contactsRouter);
apiRouter.use("/conversations", verifyToken ,conversationsRouter);

export default apiRouter
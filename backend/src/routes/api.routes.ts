import express from "express";
import AuthRouter from "../services/Auth/auth.routes";
const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
    res.send("Api backend chat app");
});

apiRouter.use("/auth", AuthRouter);

export default apiRouter
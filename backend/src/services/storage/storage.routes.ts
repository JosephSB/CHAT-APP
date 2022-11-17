import express from "express";
import { getImage } from "./storage.controller";
const storageRouter = express.Router();

storageRouter.get("/", (req, res) => {
    res.send("storage from service chat app");
});

storageRouter.get("/:dir/:size/:id",getImage);

export default storageRouter
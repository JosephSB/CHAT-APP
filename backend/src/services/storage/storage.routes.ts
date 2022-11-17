import express from "express";
const storageRouter = express.Router();

storageRouter.get("/", (req, res) => {
    res.send("storage from service chat app");
});

storageRouter.get("/:dir/:size/:id");

export default storageRouter
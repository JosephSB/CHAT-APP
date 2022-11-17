import storageRouter from "../services/storage/storage.routes";
import express from "express";
import apiRouter from "./api.routes";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Backend chat app");
});
router.use("/api", apiRouter);
router.use("/storage", storageRouter);

export default router
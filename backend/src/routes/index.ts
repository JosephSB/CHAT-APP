import express from "express";
import apiRouter from "./api.routes";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Backend chat app");
});
router.use("/api", apiRouter);

export default router
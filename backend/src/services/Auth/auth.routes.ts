import express from "express";
import { verifyToken } from "../../middlewares/Auth.middleware";
import { getUser, Login, Register } from "./auth.controller";
const AuthRouter = express.Router();

AuthRouter.post("/login", Login);
AuthRouter.post("/register", Register);
AuthRouter.get("/me",verifyToken, getUser);

export default AuthRouter
import express from "express";
import { Login, Register } from "./auth.controller";
const AuthRouter = express.Router();

AuthRouter.post("/login", Login);
AuthRouter.post("/register", Register);

export default AuthRouter
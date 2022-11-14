import express from "express";
import { Login, Register } from ".";
const AuthRouter = express.Router();

AuthRouter.post("/login", Login);
AuthRouter.post("/register", Register);

export default AuthRouter
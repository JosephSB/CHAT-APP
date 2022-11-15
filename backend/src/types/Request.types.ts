import { Request } from "express";
import { UserCredentials } from "./User.types";

export interface AppRequest extends Request {
    user: Pick<UserCredentials, "user_id" | "email" >
}
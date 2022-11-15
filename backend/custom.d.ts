import { UserCredentials } from "./src/types/User.types";

export {}

declare global {
  namespace Express {
    export interface Request {
      user?: Pick<UserCredentials, "user_id" | "email" >
    }
  }
}
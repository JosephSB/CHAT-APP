import config from "../config"
import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader !== "undefined") {
        const bearerToken = bearerHeader.split(" ")[1];

        jwt.verify(bearerToken, config.jwt.secret, (error, data) => {
            if (error || typeof data === "string") {
                res.status(400).json({ message: "EL TOKEN NO ES VALIDO" });
            } else {
                req.user = {...data?.user}
                next();
            }
        });
    } else {
        res.sendStatus(403);
    }
}
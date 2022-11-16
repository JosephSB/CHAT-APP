import config from "../../config/index";
import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import { CreateUser, findUserEmail, getFullDataUser, validateUserByCredentials } from "./auth.model";
import { ValidateParamsRegister, ValidateParamsLogin } from "./utils/user.validate";

export const Login = async (req: Request, res: Response) => {
    const data = req.body;

    try {
        if (!ValidateParamsLogin(data)) throw new Error("Los datos son incorrectos");

        const user = await validateUserByCredentials(data).catch(() => { throw new Error("Error al comprobar credenciales") })

        if (!user.user_id) throw new Error("credenciales incorrectos")

        const token = jwt.sign({ user }, config.jwt.secret, { expiresIn: "7d" });

        res.status(200).json({
            message: "Login exitoso",
            token: token
        })
    } catch (error) {
        console.error(error)
        let message = 'Upps ocurrio un error'
        if (error instanceof Error) message = error.message

        res.status(400).json({
            message: message
        })
    }

}

export const getUser = async (req: Request, res: Response) => {
    const user = req.user;

    try {
        const data = await getFullDataUser(user?.user_id || "");
        res.status(200).json({
            message: "me",
            data
        })

    } catch (error) {
        console.error(error)
        let message = 'Upps ocurrio un error'
        if (error instanceof Error) message = error.message

        res.status(400).json({
            message: message
        })
    }
}

export const Register = async (req: Request, res: Response) => {
    const data = req.body;

    try {
        if (!ValidateParamsRegister(data)) throw new Error("Los datos son incorrectos");
        const existEmail = await findUserEmail(data.email).catch(() => { throw new Error("Error al buscar email") })
        if (existEmail !== null) throw new Error("Ya existe un usuario con ese email");

        await CreateUser(data).catch(() => { throw new Error("Error al crear usuario") })

        res.status(200).json({
            message: "Usted se registro exitosamente"
        })
    } catch (error) {
        console.error(error)
        let message = 'Upps ocurrio un error'
        if (error instanceof Error) message = error.message

        res.status(400).json({
            message: message
        })
    }
}
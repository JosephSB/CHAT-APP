import config from "../../config/index";
import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import { CreateUser, validateUserByCredentials } from "./auth.model";
import { ValidateParamsRegister,ValidateParamsLogin } from "./utils/user.validate";

export const Login = async (req: Request, res: Response) => {
    const data = req.body;

    try {
        if(!ValidateParamsLogin(data)) throw new Error("Los datos son incorrectos");

        const user = await validateUserByCredentials(data).catch( () => { throw new Error("Error al comprobar credenciales") } )

        if(!user.user_id) throw new Error("credenciales incorrectos")

        const token = jwt.sign({ user }, config.jwt.secret, {expiresIn: "7d"});

        res.status(200).json({
            message: "Login exitoso",
            token: token
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({
            message: "Upps ocurrio un error"
        })
    }

}

export const Register = (req: Request, res: Response) => {
    const data = req.body;

    try {
        if(!ValidateParamsRegister(data)) throw new Error("Los datos son incorrectos");

        CreateUser(data)
            .then( () => {
                res.status(200).json({
                    message: "Usted se registro exitosamente"
                })
            } )
            .catch( () => { throw new Error("Error al crear usuario") } )
        
    } catch (error) {
        console.error(error)
        res.status(400).json({
            message: "Upps ocurrio un error"
        })
    }
}
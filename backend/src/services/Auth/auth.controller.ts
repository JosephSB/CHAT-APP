import { Request, Response } from "express";
import { CreateUser } from "./auth.model";
import { ValidateUser } from "./utils/user.validate";


export const Login = (req: Request, res: Response) => {

}

export const Register = (req: Request, res: Response) => {
    const data = req.body;

    try {
        if(!ValidateUser(data)) throw new Error("Los datos son incorrectos");

        CreateUser(data)
            .then( (resp) => {
                console.log(resp)
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
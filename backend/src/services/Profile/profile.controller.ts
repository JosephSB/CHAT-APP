import { Request, Response } from "express";
import { processFileImage } from "../../libs/files.libs";
import { findUserInContacts, getDataUser, updateDataUser } from "./profile.model";

export const getMyProfile = async (req: Request, res: Response) => {
    const user = req.user;

    try {
        const data = await getDataUser(user?.user_id || "").catch(() => { throw new Error("Error al obtener mi perfil") });
        res.status(200).json({
            message: "Tu perfil",
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

export const getProfile = async (req: Request, res: Response) => {
    const params = req.params;
    const user = req.user;

    try {
        if(!params.idUser) throw new Error("No envio el id del usuario")
        const data = await getDataUser(params.idUser).catch(() => { throw new Error("Error al obtener perfil") });
        const isFriends = await findUserInContacts(user?.user_id || "", params.user_id ).catch((e) => { 
            console.log(e)
            throw new Error("Error al comprobar si son amigos") 
        });
        
        res.status(200).json({
            message: "Perfil de "+data.username,
            isFriends: isFriends !== null ? true : false,
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

export const changePhoto = async (req: Request, res: Response) => {
    const user = req.user;
    const image = req.file;

    try {
        if(!image) throw new Error("No se recibio ninguna imagen")

        const resp = await processFileImage(image);
        if(!resp.success) throw new Error("Error al guardar la imagen")
        await updateDataUser(user?.user_id || "", {url_photo: resp.filename}).catch((e) => { throw new Error("Error al actualizar foto usuario") })
        
        res.status(200).json({
            message: "foto actualizada",
            url_photo: resp.filename
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
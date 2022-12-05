import { getFullDataUser } from "../Auth/auth.model";
import { Request, Response } from "express";
import { acceptPending, addRequestToList, existInList, findUser, getListsOfUser, removeContact } from "./contacts.models";

export const getLists = async (req: Request, res: Response) => {
    const user = req.user;

    try {
        const resp = await getListsOfUser(user?.user_id || "").catch(() => { throw new Error("Error al buscar tus contactos") })

        res.status(200).json({
            message: "Tu lista de contactos",
            lists: resp[0] || [],
        })
        /*

        res.status(200).json({
            message: "Tu lista de contactos",
            contacts: resp?.contacts || [],
            pendings: resp?.pendings || [],
            requested: resp?.requested || []
        })
        */
    } catch (error) {
        console.error(error)
        let message = 'Upps ocurrio un error'
        if (error instanceof Error) message = error.message

        res.status(400).json({
            message: message
        })
    }
}

export const sendContactRequest = async (req: Request, res: Response) => {
    const user = req.user;
    const params = req.params;

    try {
        const findUser = await getFullDataUser(params.idUser)
        if(findUser.user_id === "") throw new Error("El id del usuario no existe")

        const resp = await existInList(user?.user_id || "", params.idUser, "requested").catch((e) => { throw new Error("error al buscar si existe") })
        if(resp) throw new Error("Ya envio solicitud")

        await addRequestToList(user?.user_id || "", params.idUser)
            .catch((e) => { throw new Error("Error al agregar la solicitud") })

        res.status(200).json({
            message: "Sen envio la solicitud"
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

export const acceptContactRequest = async (req: Request, res: Response) => {
    const user = req.user;
    const params = req.params;

    try {
        const findUser = await getFullDataUser(params.idUser)
        if(findUser.user_id === "") throw new Error("El id del usuario no existe")

        const resp = await existInList(user?.user_id || "", params.idUser, "pendings").catch((e) => { throw new Error("error al buscar si existe") })
        if(!resp) throw new Error("Ese usuario no le envio solicitud")
    
        await acceptPending(user?.user_id || "", params.idUser)
            .catch((e) => { throw new Error("error al aceptar solicitud") })

        res.status(200).json({
            message: "Se acepto la solicitud"
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

export const removeContactRequest = async (req: Request, res: Response) => {
    const user = req.user;
    const params = req.params;

    try {
        const findUser = await getFullDataUser(params.idUser)
        if(findUser.user_id === "") throw new Error("El id del usuario no existe")

        const resp = await existInList(user?.user_id || "", params.idUser, "contacts").catch((e) => { throw new Error("error al buscar si existe") })
        if(!resp) throw new Error("Ese usuario no esta en tus contactos")

        await removeContact(user?.user_id || "", params.idUser)
            .catch((e) => {throw new Error("error al aceptar solicitud") })

        res.status(200).json({
            message: "Se elimino de tus contactos"
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

export const searchUser = async (req: Request, res: Response) => {
    const data = req.body;

    try {
        const resp = await findUser(data.q || "")
            .catch((e) => {throw new Error("error al buscar") })

        res.status(200).json({
            message: "usuarios encontrados",
            data: resp
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
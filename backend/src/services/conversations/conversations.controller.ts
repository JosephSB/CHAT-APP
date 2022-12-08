import { getStatusContact } from "../../services/contacts/contacts.models";
import { Request, Response } from "express";
import { createConversation, existConversationBetweenUsers, findConversationWithID } from "./conversations.model";

export const getDetailConversation = async (req: Request, res: Response) => {
    const user = req.user;
    const params = req.params;

    try {
        //validar si son amigos
        const isFriends = await getStatusContact(user?.user_id || "", params.idAnotherUser || "");
        if(isFriends !== 1) throw new Error("No son amigos")

        //validar si exiten los ids (falta)

        //cosnt idConversation = validar si existe conversacion, sino existe crearla 
        let idConversation: string;
        const respA = await existConversationBetweenUsers(user?.user_id || "", params.idAnotherUser || "");
        if(!respA) idConversation =  await createConversation(user?.user_id || "", params.idAnotherUser || "")
        else idConversation = respA

        const respB = await findConversationWithID(idConversation || "")
        if(!respB) throw new Error("No existe conversacion")

        res.status(200).json({
            message: "detalle del chat",
            data: respB
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
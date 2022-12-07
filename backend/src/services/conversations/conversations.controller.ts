import { Request, Response } from "express";

export const getDetailConversation = async (req: Request, res: Response) => {
    const user = req.user;
    const params = req.params;

    try {

        res.status(200).json({
            message: "detalle del chat",
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
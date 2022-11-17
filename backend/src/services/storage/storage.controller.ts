import { Request, Response } from "express";
import fs from "fs"

export const getImage = (req: Request, res: Response) => {
    //const params = req.params;
    try {
        res.end()
    } catch (error) {
        console.error(error)
        let message = 'Upps ocurrio un error'
        if (error instanceof Error) message = error.message

        var img = fs.readFileSync('./logo.gif'); 
        res.writeHead(200, {'Content-Type': 'image/gif' }); 
        res.end(img, 'binary');

        
    }
}
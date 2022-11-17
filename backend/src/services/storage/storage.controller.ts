import config from "../../config/index";
import { Request, Response } from "express";
import fs from "fs"

export const getImage = (req: Request, res: Response) => {
    const params = req.params;

    try {
        if(!fs.existsSync(config.root+'/uploads/'+params.dir)) throw new Error("no existe ese directorio")
        const image = params.size + "-"+params.id;
        const ext = params.id.split(".")[1];
        if(!fs.existsSync(config.root+'/uploads/'+params.dir+'/'+image)) throw new Error("no existe esa imagen")

        var img = fs.readFileSync(config.root+'/uploads/'+params.dir+'/'+image); 
        res.writeHead(200, {'Content-Type': 'image/'+ext }); 
        res.end(img, 'binary');
    } catch (error) {
        console.error(error)

        var img = fs.readFileSync(config.root+'/public/notfound.png'); 
        res.writeHead(200, {'Content-Type': 'image/png' }); 
        res.end(img, 'binary');

        
    }
}
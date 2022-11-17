import sharp from "sharp";
import { CreateID } from "../utils/Id.utils";
import { validateImgFile } from "../utils/Validator.util"
import fs from "fs"
import config from "../config/index";

const resizeImgFile = async (fileBuffer: Buffer, size: number, filename: string, dest: string) => {
    const destination = dest;

    if (!fs.existsSync(destination)) {
        const mkDir = () =>
            new Promise((res, rej) => {
                fs.mkdir(destination, { recursive: true }, function (err) {
                    if (err)  rej(err);
                    res(true);
                });
            });
        await mkDir()
    }

    await sharp(fileBuffer)
        .resize(size, size)
        //.toFormat("webp")
        //.webp({quality: 90})
        .toFile(`${destination}/${filename}`)
        .catch((e) => {
            console.error(e)
            throw new Error("Error al hacer resize")
        });
}

export const processProfileImage = async (file: Express.Multer.File): Promise<{ success: boolean, filename: string }> => {
    try {
        //return url
        if (!validateImgFile(file)) throw new Error("Formato Invalido");
        const ID = CreateID();
        const filename = ID + "." + file.mimetype.split("/")[1];
        //50x50
        //200x200
        //525x525
        await resizeImgFile(file.buffer, 50, "50x50-" + filename, config.storage.users).catch((e) => { throw new Error(e) })
        await resizeImgFile(file.buffer, 200, "200x200-" + filename, config.storage.users).catch((e) => { throw new Error(e) })
        await resizeImgFile(file.buffer, 525, "525x525-" + filename, config.storage.users).catch((e) => { throw new Error(e) })

        return {
            success: true,
            filename: filename
        }
    } catch (error) {
        console.error(error)
        return {
            success: false,
            filename: ""
        }
    }
}
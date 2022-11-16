export const ValidateEmail = (email: string) => {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if ( !emailRegex.test(email)) return false
    return true
}

export const ValidateUsername = (name: string) => {
    if (name.length <= 3) return false
    return true
}

export const ValidatePassword = (pass: string, pass2: string) =>{
    const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    if (!passwordRegex.test(pass)) return false
    if (!passwordRegex.test(pass2)) return false
    if(pass !== pass2) return false

    return true
}

export const ValidateLengthObject = (obj: object,length: number) => {
    if (Object.keys(obj).length !== length) return false
    return true
}

export const validateImgFile = (file: Express.Multer.File) => {
    const parserMimetype = file.mimetype.split("/");
    if(parserMimetype[0] !== "image") return false
    if(parserMimetype[1] !== "png" && parserMimetype[1] !== "jpg" && parserMimetype[1] !== "webp") return false
    if(file.size > 1024*1024)  return false
    return true
}
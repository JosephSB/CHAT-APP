import bcrypt from "bcryptjs";

export const EncryptPassword = (password: string) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

export const ComparePassword = (password: string, password2 : string ) => {
    return bcrypt.compareSync(password, password2);
}
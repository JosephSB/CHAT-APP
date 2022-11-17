import dotenv from "dotenv";
dotenv.config();

const STORAGE = __dirname+"/"+"../uploads";

export default {
    PORT: process.env.port || 4000,
    storage: {
        root: STORAGE,
        users: STORAGE+"/users"
    },
    jwt: {
        secret: process.env.jwtsecret || ""
    },
    mongo: {
        host: process.env.host,
        database: process.env.db,
    }
}
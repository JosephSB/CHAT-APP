import dotenv from "dotenv";
dotenv.config();

const ROOT = process.env.root_proyect || __dirname;

export default {
    PORT: process.env.port || 4000,
    port_frontend: process.env.port_frontend || "http://localhost:3000",
    root: ROOT,
    storage: {
        root: ROOT+"/uploads",
        users: ROOT+"/uploads/users"
    },
    jwt: {
        secret: process.env.jwtsecret || ""
    },
    mongo: {
        host: process.env.host,
        database: process.env.db,
    }
}
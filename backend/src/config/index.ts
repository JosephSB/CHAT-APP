import dotenv from "dotenv";
dotenv.config();

export default {
    PORT: process.env.port || 4000,
    mongo: {
        host: process.env.host,
        database: process.env.db,
    }
}
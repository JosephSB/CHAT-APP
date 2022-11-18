import express from "express";
import http from "http"
import cors from "cors";
import config from "./config";
import routes from "./routes/index"

const app = express()
app.set("PORT", config.PORT)

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname +'/public'));

app.use("/",routes);

const server = http.createServer(app);

export { server, app }
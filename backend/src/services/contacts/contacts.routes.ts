import express from "express";
import { acceptContactRequest, getLists, removeContactRequest, searchUser, sendContactRequest, statusContact } from "./contacts.controller";
const contactsRouter = express.Router();

contactsRouter.get("/getLists", getLists);
contactsRouter.post("/searchUsers", searchUser);
contactsRouter.get("/status/:idUser", statusContact);
contactsRouter.get("/sendContactRequest/:idUser", sendContactRequest);
contactsRouter.get("/acceptContactRequest/:idUser", acceptContactRequest);
contactsRouter.get("/removeContactRequest/:idUser", removeContactRequest);

export default contactsRouter
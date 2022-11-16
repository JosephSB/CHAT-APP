import express from "express";
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
import { changePhoto, getMyProfile, getProfile } from "./profile.controller";
const ProfileRouter = express.Router();

ProfileRouter.get("/myProfile", getMyProfile);
ProfileRouter.get("/getProfile/:idUser", getProfile);
ProfileRouter.post("/changePhoto",upload.single("image"), changePhoto)

export default ProfileRouter
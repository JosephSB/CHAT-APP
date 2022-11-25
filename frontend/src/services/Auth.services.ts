import config from "@/config";
import { CreateHeader } from "../utils/Http";
import axios from "axios"
import Cookies from "js-cookie";

export const getMyProfile = () => {
    const header = CreateHeader();
    return axios.get(`${config.API_URL}/api/auth/me`,header)
}

export const logout = () => {
    Cookies.remove(config.TOKEN_AUTH)
}
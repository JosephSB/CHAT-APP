import config from "@/config";
import { CreateHeader } from "../utils/Http";
import axios from "axios"

export const getMyProfile = () => {
    const header = CreateHeader();
    return axios.get(`${config.API_URL}/api/auth/me`,header)
}
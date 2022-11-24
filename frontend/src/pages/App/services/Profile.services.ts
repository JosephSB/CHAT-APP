import config from "@/config";
import { CreateHeader } from "@/utils/Http";
import axios from "axios"

export const getMyDataProfile = () => {
    const header = CreateHeader();
    return axios.get(`${config.API_URL}/api/profile/myProfile`,header)
}
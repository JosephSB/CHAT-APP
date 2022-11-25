import config from "@/config";
import { CreateHeader } from "@/utils/Http";
import axios from "axios"

export const getMyDataProfile = () => {
    const header = CreateHeader();
    return axios.get(`${config.API_URL}/api/profile/myProfile`,header)
}

export const changeDataProfile = (data: { [x: string] : string }) => {
    const header = CreateHeader();
    return axios.post(`${config.API_URL}/api/profile/changeInfo`,data,header)
}

export const changePhotoProfile = (form: FormData) => {
    const header = CreateHeader();
    return axios.post(`${config.API_URL}/api/profile/changePhoto`,form,header)
}

import config from "@/config";
import axios from "axios"
import { IFormLogin, IFormRegister } from "../interfaces/Auth.interfaces";

export const EPLogin = (data: IFormLogin) => {
    return axios.post(`${config.API_URL}/api/auth/login`,data)
}

export const EPRegister = (data: IFormRegister) => {
    return axios.post(`${config.API_URL}/api/auth/register`, data)
}
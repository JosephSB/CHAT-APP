import config from "@/config";
import { CreateHeader } from "@/utils/Http";
import axios from "axios"

export const getContactLists = async () => {
    const header = CreateHeader();
    const resp = await axios.get(`${config.API_URL}/api/contacts/getLists`,header)
    if(resp.status === 200) return resp.data.lists || {}
    return {}
}

export const searchContacts = (q: string) => {
    const header = CreateHeader();
    return axios.post(`${config.API_URL}/api/contacts/searchUsers`, {q} ,header)
}
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

export const statusContact = async (userID: string) => {
    const header = CreateHeader();
    const resp = await axios.get(`${config.API_URL}/api/contacts/status/${userID}` ,header)
    if(resp.status === 200) return resp.data.data || {}
    return {}
}

export const sendRequestContact = (userID: string) => {
    const header = CreateHeader();
    return axios.get(`${config.API_URL}/api/contacts/sendContactRequest/${userID}`,header)
}

export const acceptRequestContact = (userID: string) => {
    const header = CreateHeader();
    return axios.get(`${config.API_URL}/api/contacts/acceptContactRequest/${userID}`,header)
}
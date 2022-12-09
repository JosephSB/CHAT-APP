import config from "@/config";
import { CreateHeader } from "@/utils/Http";
import axios from "axios"

export const getDetailChat = async (anotherUser: string) => {
    const header = CreateHeader();
    const resp = await axios.get(`${config.API_URL}/api/conversations/getDetail/${anotherUser}`,header)
    if(resp.status === 200) return resp.data.data || {}
    return {}
}

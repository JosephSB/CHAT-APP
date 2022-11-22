import config  from "../config/index";
import Cookies from "js-cookie";

export const CreateHeader = () =>{
    //solo ejecutar en el cliente
    const token = Cookies.get(config.TOKEN_AUTH)

    const header = {
        headers:{
            Authorization: `Bearer ${token}`,
        }
    }

    return header;
    
}
import SearchInput from "@/pages/App/components/SearchInput"
import { useState } from "react";

const ContactsSearch = () => {
    const [resp, setResp] = useState([]);

    const handleInput = (text: string) =>{
        console.log(text)
    }

    return(
        <div>
            <SearchInput action={handleInput} placeholder='Buscar Contactos'/>
        </div>
    )
}

export default ContactsSearch
import SimpleLoader from "@/components/loaders/SimpleLoader";
import CardContact from "@/pages/App/components/Cards/CardContact/Index";
import SearchInput from "@/pages/App/components/SearchInput"
import { IProfile } from "@/pages/App/interfaces/Profile.interface";
import { searchContacts } from "@/pages/App/services/Contacts.services";
import { useState } from "react";
import { StyledWrapperCardContacts } from "../../styles";

const ContactsSearch = () => {
    const [loading, setLoading] = useState(false);
    const [resp, setResp] = useState<IProfile[] | [] >([]);

    const handleInput = (text: string) =>{
        setLoading(true)
        searchContacts(text)
        .then( (resp) => {
            if(resp.status === 200) setResp(resp.data.data)
        } )
        .catch( (err) => console.log(err) )
        .finally( () => setLoading(false) )
    }
    return(
        <StyledWrapperCardContacts>
            <SearchInput action={handleInput} placeholder='Buscar Contactos'/>
            {loading && <SimpleLoader/>}
            {resp.length === 0 && <p>Sin resultados</p>}
            {resp.map( (item) => <CardContact data={item} /> )}
        </StyledWrapperCardContacts>
    )
}

export default ContactsSearch
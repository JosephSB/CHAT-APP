import SimpleLoader from "@/components/loaders/SimpleLoader"
import CardContact from "@/pages/App/components/Cards/CardContact/Index"
import SearchInput from "@/pages/App/components/SearchInput"
import { IContacts } from "@/pages/App/interfaces/Contacts.interfaces"
import { getContactLists } from "@/pages/App/services/Contacts.services"
import { useQuery } from "react-query"

const ContactsWrapper = () => {
    const { data, isError, isLoading } = useQuery<IContacts>('ContactLists', getContactLists)

    if(isLoading){
        return(
            <div>
                <SimpleLoader/>
            </div> 
        )
    }

    if(data && data?.contacts.length === 0) {
        return(
            <div>
                No tiene contactos
            </div>
        )
    }
    return(
        <div>
            <SearchInput placeholder='Buscar Contacto'/>
            {
                data?.contacts.map( (item)=> <CardContact key={item.user_id} data={item} /> )
            }
        </div>
    )
}

export default ContactsWrapper
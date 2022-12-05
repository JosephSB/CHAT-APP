import SearchInput from "@/pages/App/components/SearchInput"
import { IProfile } from "@/pages/App/interfaces/Profile.interface"

interface props {
    list: IProfile[]
}

const ContactsWrapper = ({list}:props) => {
    if(list.length === 0) {
        return(
            <div>
                No tiene contactos
            </div>
        )
    }
    return(
        <div>
            <SearchInput placeholder='Buscar Contacto'/>
        </div>
    )
}

export default ContactsWrapper
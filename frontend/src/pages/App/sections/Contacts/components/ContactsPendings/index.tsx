import CardContact from "@/pages/App/components/Cards/CardContact/Index"
import SearchInput from "@/pages/App/components/SearchInput"
import { StyledWrapperPendings } from "./styles"
import SimpleLoader from "@/components/loaders/SimpleLoader"
import { IContacts } from "@/pages/App/interfaces/Contacts.interfaces"
import { getContactLists } from "@/pages/App/services/Contacts.services"
import { useQuery } from "react-query"


const PendingsWrapper = () => {
    const { data, isError, isLoading } = useQuery<IContacts>('PendingsLists', getContactLists)

    if(isLoading){
        return(
            <StyledWrapperPendings>
                <SimpleLoader/>
            </StyledWrapperPendings> 
        )
    }

    if(data && data?.pendings.length === 0) {
        return(
            <StyledWrapperPendings>
                No tiene solicitudes de amistad
            </StyledWrapperPendings>
        )
    }
    
    return(
        <StyledWrapperPendings>
            <SearchInput placeholder='Buscar Solicitud'/>
            {
                data?.pendings.map( (item)=> <CardContact data={item} /> )
            }
        </StyledWrapperPendings>
    )
}

export default PendingsWrapper
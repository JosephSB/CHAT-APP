import CardContact from "@/pages/App/components/Cards/CardContact/Index"
import SearchInput from "@/pages/App/components/SearchInput"
import { IProfile } from "@/pages/App/interfaces/Profile.interface"
import { StyledWrapperPendings } from "./styles"

interface props {
    list: IProfile[]
}

const PendingsWrapper = ({list}:props) => {
    if(list.length === 0) {
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
                list.map( (item)=> <CardContact data={item} /> )
            }
        </StyledWrapperPendings>
    )
}

export default PendingsWrapper
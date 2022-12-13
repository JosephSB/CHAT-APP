import SimpleLoader from "@/components/loaders/SimpleLoader"
import ContextDataProfile from "@/pages/App/contexts/DataProfile.context"
import { IConversation } from "@/pages/App/interfaces/Chat.interfaces"
import { getListConversations } from "@/pages/App/services/Chat.service"
import { useQuery } from "react-query"
import CardConversation from "../CardConversation"
import { StyledListCardsConversation } from "./styles"

const ListConversations = () => {
    const {dataUser} = ContextDataProfile()
    const { data, isError, isLoading } = useQuery<IConversation[]>('ListConversations', getListConversations)

    if(isLoading){
        return(
            <StyledListCardsConversation>
                <SimpleLoader/>
            </StyledListCardsConversation> 
        )
    }

    if(!data || data.length === 0) {
        return(
            <StyledListCardsConversation>
                No tiene solicitudes de amistad
            </StyledListCardsConversation>
        )
    }
    

    return(
        <StyledListCardsConversation>
            {
                data.map( (conversation) => {
                    return <CardConversation 
                    key={conversation.conversation_id} 
                    data={conversation.users.find((u) => u.user_id !== dataUser.user_id)}
                    />
                } )
            }
        </StyledListCardsConversation>
    )
}

export default ListConversations
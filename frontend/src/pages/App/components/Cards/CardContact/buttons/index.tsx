import { statusContact } from "@/pages/App/services/Contacts.services"
import { useQuery } from "react-query"
import BtnAccept from "./BtnAccept"
import BtnAdd from "./BtnAdd"
import BtnFriends from "./BtnFriends"
import BtnRequested from "./BtnRequested"

interface IStatusContact {
    status: number
}

interface props {
    userID: string
}

const RouterButtons = ({userID}:props) => {
    const { data, isError, isLoading } = useQuery<IStatusContact>('StatusContact', () => statusContact(userID))

    if(isLoading) return <p>loading</p>

    if(data?.status === 1) return <BtnFriends/>
    if(data?.status === 2) return <BtnAccept userID={userID}/>
    if(data?.status === 3) return <BtnRequested/>

    return <BtnAdd userID={userID} />
}

export default RouterButtons
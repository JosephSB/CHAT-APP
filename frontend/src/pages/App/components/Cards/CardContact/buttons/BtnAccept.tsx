import ContextDataProfile from "@/pages/App/contexts/DataProfile.context";
import { StyledButtonCardContact } from "../styles"
import { useState } from "react"
import { acceptRequestContact } from "@/pages/App/services/Contacts.services";
import BtnLoader from "@/components/loaders/BtnLoader";
import BtnFriends from "./BtnFriends";

interface props {
    userID: string
}

const BtnAccept = ({userID}:props) => {
    const {refetchData} = ContextDataProfile();
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const handleClick = () => {
        setLoading(true)
        acceptRequestContact(userID)
        .then( (resp) => {
            if(resp.status === 200) {
                refetchData()
                setSuccessful(true)
            }
        } )
        .catch( (err) => console.error(err) )
        .finally( () => setLoading(false))
    }

    if(loading) {
        return <BtnLoader/>
    }

    if(successful) {
        return <BtnFriends/>
    }

    return(
        <StyledButtonCardContact onClick={handleClick}><i className="fas fa-check-circle"/>&nbsp;ACEPTAR</StyledButtonCardContact>
    )
}

export default BtnAccept
import BtnLoader from "@/components/loaders/BtnLoader"
import ContextDataProfile from "@/pages/App/contexts/DataProfile.context"
import { sendRequestContact } from "@/pages/App/services/Contacts.services"
import { PRIMARY_COLOR } from "@/styled-components/variables"
import { useState } from "react"
import { StyledButtonCardContact } from "../styles"
import BtnRequested from "./BtnRequested"

interface props {
    userID: string
}

const BtnAdd = ({userID}:props) => {
    const {refetchData} = ContextDataProfile();
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const handleClick = () => {
        setLoading(true)
        sendRequestContact(userID)
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
        return <BtnLoader color={PRIMARY_COLOR}/>
    }

    if(successful) {
        return <BtnRequested/>
    }

    return(
        <StyledButtonCardContact onClick={handleClick} color={PRIMARY_COLOR}>
            <i className="fas fa-user-plus"/>&nbsp;AÑADIR
        </StyledButtonCardContact>
    )
}

export default BtnAdd
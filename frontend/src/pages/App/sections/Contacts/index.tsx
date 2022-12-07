import { useState } from "react";
import { useQuery } from "react-query";
import ContextRouter from "../../contexts/Router.context";
import { getContactLists } from "../../services/Contacts.services";
import ContactsWrapper from "./components/ContactsWrapper";
import { StyledAside,StyledBody,StyledHeader, StyledMainSearch, StyledMainTabs } from "./styles";
import SimpleLoader from "@/components/loaders/SimpleLoader";
import { IContacts } from "../../interfaces/Contacts.interfaces";
import PendingsWrapper from "./components/ContactsPendings";
import ContactsSearch from "./components/ContactsSearch";
import ContextDataProfile from "../../contexts/DataProfile.context";

const ContactsSection = () => {
    //const { data, isError, isLoading, refetch } = useQuery<IContacts>('ContactLists', getContactLists)
    const [tabActive, setTabActive] = useState(0);
    const {handleRoute} = ContextRouter();
/*
    if(isLoading){
        return(
            <StyledAside>
                <StyledHeader>
                    <p>CONTACTOS</p>
                    <i onClick={() => handleRoute(0)} className="fas fa-times-circle"></i>
                </StyledHeader>
                <StyledBody>
                    <SimpleLoader/>
                    <p>Cargando Contactos</p>
                </StyledBody>
            </StyledAside>  
        )
    }

    if(isError || !data){
        return(
            <StyledAside>
                <StyledHeader>
                    <p>CONTACTOS</p>
                    <i onClick={() => handleRoute(0)} className="fas fa-times-circle"></i>
                </StyledHeader>
                <StyledBody>
                    <p>Ocurrio un error</p>
                </StyledBody>
            </StyledAside>  
        )
    }
*/
    return (
        <StyledAside>
            <StyledHeader>
                <p>CONTACTOS</p>
                <i onClick={() => handleRoute(0)} className="fas fa-times-circle"></i>
            </StyledHeader>
            <StyledBody>
                <StyledMainTabs>
                    <li 
                    onClick={() => setTabActive(0)}  
                    className={tabActive === 0 ? "active" : ""}
                    children="TODOS"
                    />
                    <li 
                    onClick={() => setTabActive(1)}  
                    className={tabActive === 1 ? "active" : ""}
                    children="PENDIENTES"
                    />
                    <li 
                    onClick={() => setTabActive(2)}  
                    className={tabActive === 2 ? "active" : ""}
                    children="BUSCAR"
                    />
                </StyledMainTabs>
                <StyledMainSearch>
                    {tabActive === 0 && <ContactsWrapper /> }
                    {tabActive === 1 && <PendingsWrapper /> }
                    {tabActive === 2 && <ContactsSearch/> }
                </StyledMainSearch>
            </StyledBody>
        </StyledAside>
    )
}

export default ContactsSection
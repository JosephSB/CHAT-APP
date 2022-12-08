import { useState } from "react";
import ContextRouter from "../../contexts/Router.context";
import ContactsWrapper from "./components/ContactsWrapper";
import { StyledAside,StyledBody,StyledHeader, StyledMainSearch, StyledMainTabs } from "./styles";
import PendingsWrapper from "./components/ContactsPendings";
import ContactsSearch from "./components/ContactsSearch";

const ContactsSection = () => {
    const [tabActive, setTabActive] = useState(0);
    const {handleAsideRoute} = ContextRouter();

    return (
        <StyledAside>
            <StyledHeader>
                <p>CONTACTOS</p>
                <i onClick={() => handleAsideRoute(0)} className="fas fa-times-circle"></i>
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
import { useState } from "react";
import SearchInput from "../../components/SearchInput";
import ContextRouter from "../../contexts/Router.context";
import { StyledAside,StyledBody,StyledHeader, StyledMainSearch, StyledMainTabs } from "./styles";

const ContactsSection = () => {
    const [tabActive, setTabActive] = useState(0);
    const {handleRoute} = ContextRouter();

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
                    <SearchInput placeholder='Buscar Contacto'/>
                </StyledMainSearch>
            </StyledBody>
        </StyledAside>
    )
}

export default ContactsSection
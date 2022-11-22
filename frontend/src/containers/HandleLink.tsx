import { NavLink } from "react-router-dom";

interface props {
    children: JSX.Element
    href: string
}

const HandleLink = ({children, href}:props) => {
    return(
        <NavLink to={href}  
        className={(navData) => (navData.isActive ? 'active' : '')}
        >
            {children}
        </NavLink>
    )
}

export default HandleLink
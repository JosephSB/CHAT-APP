import ContextRouter from "../contexts/Router.context";
import ChatsSection from "../sections/Chats";
import ContactsSection from "../sections/Contacts";
import ProfileSection from "../sections/Profile";

const Routes = [
    {
        id: 0,
        view: <ChatsSection/>
    },
    {
        id: 1,
        view: <ContactsSection/>
    },
    {
        id: 2,
        view: <ProfileSection/>
    },
    {
        id: 3,
        view: <p>OTRO PERFIL</p>
    },
]

const AsideRouter = () => {

    const {active} = ContextRouter();

    if(!Routes[active]) return Routes[0].view

    return Routes[active].view
}

export default AsideRouter
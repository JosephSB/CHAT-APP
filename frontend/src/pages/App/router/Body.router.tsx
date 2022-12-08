import ContextRouter from "../contexts/Router.context";
import BodyChat from "../sections/body/Chat";
import BodyHome from "../sections/body/Home";

const Routes = [
    {
        id: 0,
        view: <BodyHome/>
    },
    {
        id: 1,
        view: <BodyChat/>
    },
]


const BodyRouter = () => {

    const {viewsActive} = ContextRouter();

    if(!Routes[viewsActive.body]) return Routes[0].view

    return Routes[viewsActive.body].view
}

export default BodyRouter
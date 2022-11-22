import { BrowserRouter as Router, Route } from "react-router-dom";
//import SimpleLoader from "@components/loaders/SimpleLoader";
import ScrollToTop from "@/components/scrollToTop";
import ContextAuth from "@/contexts/Auth.context";
import AppRouter from "./App.router";
import AuthRouter from "./Auth.router";
import SimpleLoader from "@/components/loaders/SimpleLoader";

const RootRouter = () => {
    const { dataUser,loading } = ContextAuth();

    if(loading){
        return(
            <SimpleLoader/>
        )
    }

    return (
        <Router basename="/">
            {dataUser.auth ? <AppRouter /> : <AuthRouter />}
            <ScrollToTop />
        </Router>
    );
}

export default RootRouter
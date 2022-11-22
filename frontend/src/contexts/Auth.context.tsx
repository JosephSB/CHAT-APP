import { createContext, useEffect, useState, useContext } from "react";
import { getMyProfile } from "@/services/Auth.services";

interface AuthInterface {
    dataUser: {
        auth: boolean,
        user_id: string,
        email: string,
    }
    loading: boolean
}

const AuthContext = createContext<AuthInterface>(
    {
        dataUser: {
            auth: false,
            user_id: "",
            email: "",
        },
        loading: true
    }
);

interface Props {
    children: JSX.Element | JSX.Element[]
}

const AuthContextProvider = ({ children }: Props) => {

    const [loading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({
        auth: false,
        user_id: "",
        email: "",
    });

    useEffect(() => {
        setLoading(true)
        getMyProfile()
            .then((resp) => {
                if (resp.status === 200) {
                    setDataUser({ ...resp.data.user, auth: true })
                }
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => setLoading(false))
    }, []);

    return (
        <AuthContext.Provider value={
            {
                loading,
                dataUser
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}


export { AuthContextProvider };

const ContextAuth = () => {
    return useContext(AuthContext);
}

export default ContextAuth;
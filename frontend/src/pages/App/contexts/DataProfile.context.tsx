import { useContext, useState,createContext, useEffect } from "react";
import { IProfile } from "../interfaces/Profile.interface";
import { getMyDataProfile } from "../services/Profile.services";

interface DataProfileInterface {
    dataUser: IProfile,
    refetchData: () => void
}

const INIT_DATA_USER = {
    user_id: "",
    url_photo: "",
    description: "",
    username: "",
    contacts: []
}

const DataProfileContext = createContext<DataProfileInterface>(
    {
        dataUser: INIT_DATA_USER,
        refetchData: () => {}
    }
);

interface Props {
    children: JSX.Element | JSX.Element[]
}

const DataProfileContextProvider = ({ children }: Props) => {
    const [data, setData] = useState<IProfile>(INIT_DATA_USER);

    const refetchData = () => {
        getMyDataProfile()
            .then( (resp) => {
                if(resp.status === 200) setData(resp.data.data)
            } )
    }

    useEffect(() => {
        refetchData()
    }, []);

    return (
        <DataProfileContext.Provider value={
            {
                dataUser: data,
                refetchData
            }
        }>
            {children}
        </DataProfileContext.Provider>
    )
}


export { DataProfileContextProvider };

const ContextDataProfile = () => {
    return useContext(DataProfileContext);
}

export default ContextDataProfile;
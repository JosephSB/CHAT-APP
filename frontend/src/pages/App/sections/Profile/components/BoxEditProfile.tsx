import ContextDataProfile from "@/pages/App/contexts/DataProfile.context";
import { changeDataProfile } from "@/pages/App/services/Profile.services";
import { useState } from "react"

interface props {
    initText: string
    name: "username" | "description"
}

const BoxEditProfile = ({initText, name}:props) => {
    const [loading, setLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [newData, setNewData] = useState(initText);
    const {refetchData} = ContextDataProfile();

    const sendNewData = () => {
        if(newData.length === 0) return
        setLoading(true)
        changeDataProfile( {[name]: newData })
        .then( (resp) => {
            if(resp.status === 200){
                refetchData()
            }
        } )
        .catch( () => console.error("Error al actualizar datos") )
        .finally( () =>  setIsEdit(false))
    }

    if(loading){
        <div className="profile-boxEditActive">
            actualizando...
        </div>
    }

    if(isEdit){
        return (
            <div className="profile-boxEditActive">
                <input 
                    onChange={(e) => setNewData(e.currentTarget.value)}
                    className="profile-boxEditActive-input" 
                    type="text" 
                    value={newData} 
                />
                <div className="profile-boxEditActive-btns">
                    <i onClick={sendNewData} className="fas fa-check"></i>
                    <i onClick={() => setIsEdit(!isEdit)} className="fas fa-times"></i>
                </div>
            </div>
        )
    }

    return (
        <div className="profile-boxEdit">
            <p className="profile-boxDescription"> {initText} </p>
            <i onClick={() => setIsEdit(!isEdit)} className="fas fa-pen"></i>
        </div>
    )
}

export default BoxEditProfile
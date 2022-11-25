import ContextDataProfile from "@/pages/App/contexts/DataProfile.context";
import { changePhotoProfile } from "@/pages/App/services/Profile.services";
import { createUrlStorage } from "@/utils/Storage.util";
import Avatar from "react-avatar"

interface props{
    initSRC: string
    name: string
}

const BoxEditPhoto = ({initSRC,name}:props) => {
    const {refetchData} = ContextDataProfile();

    const updatePhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData();
        if(e.currentTarget.files != undefined) {
            formData.append('image', e.currentTarget.files[0]);
            const resp = await changePhotoProfile(formData).catch( (err) => console.log(err) );
            if(resp && resp.status === 200) refetchData()
        }
    }


    return(
        <div className="profile-boxImg">
            <div className="profile-containerImg">
                <Avatar 
                    className='profile-img' 
                    src={
                        initSRC.length === 0 ? initSRC : createUrlStorage(initSRC,200, "users")
                    } 
                    size='250' 
                    name={name} 
                />
                <label  htmlFor="updateImg" className="profile-btnEditPhoto">
                    <i className="fas fa-camera"></i>
                </label>
                <input 
                    className="drop-down" hidden type="file"
                    accept="image/*" name="image" onChange={updatePhoto} id="updateImg" 
                />
            </div>
        </div>
    )
}

export default BoxEditPhoto
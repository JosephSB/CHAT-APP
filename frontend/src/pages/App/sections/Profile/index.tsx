import ContextDataProfile from "../../contexts/DataProfile.context";
import ContextRouter from "../../contexts/Router.context";
import BoxEditPhoto from "./components/BoxEditPhoto";
import BoxEditProfile from "./components/BoxEditProfile";
import BtnExit from "./components/BtnExit";
import { StyledAside, StyledBody, StyledHeader } from "./styles"

const ProfileSection = () => {
    const {handleAsideRoute} = ContextRouter();
    const {dataUser} = ContextDataProfile();

    return(
        <StyledAside>
            <StyledHeader>
                <p>PERFIL</p>
                <i onClick={() => handleAsideRoute(0)} className="fas fa-times-circle"></i>
            </StyledHeader>
            <StyledBody>
                <BoxEditPhoto
                    initSRC={dataUser.url_photo}
                    name={dataUser.username}
                />
                <div className="profile-box">
                    <p className="profile-boxTitle">Username: </p>
                    <BoxEditProfile
                        name="username"
                        initText={dataUser.username}
                    />
                </div>
                <div className="profile-box">
                    <p className="profile-boxTitle">Descripcion: </p>
                    <BoxEditProfile
                        name="description"
                        initText={
                            dataUser.description.length === 0 
                            ?   "No tiene descripcion"
                            :   dataUser.description
                        }
                    />
                </div>
                <div className="profile-footer">
                    <BtnExit/>
                </div>
            </StyledBody>
        </StyledAside>
    )
}

export default ProfileSection
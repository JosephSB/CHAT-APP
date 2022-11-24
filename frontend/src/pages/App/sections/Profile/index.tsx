import Avatar from "react-avatar";
import ContextDataProfile from "../../contexts/DataProfile.context";
import ContextRouter from "../../contexts/Router.context";
import { StyledAside, StyledBody, StyledHeader } from "./styles"

const ProfileSection = () => {
    const {handleRoute} = ContextRouter();
    const {dataUser} = ContextDataProfile();

    return(
        <StyledAside>
            <StyledHeader>
                <p>PERFIL</p>
                <i onClick={() => handleRoute(0)} className="fas fa-times-circle"></i>
            </StyledHeader>
            <StyledBody>
                <div className="profile-boxImg">
                    <Avatar className='profile-img' src={dataUser.url_photo} size='250' name={dataUser.username} />
                </div>
            </StyledBody>
        </StyledAside>
    )
}

export default ProfileSection
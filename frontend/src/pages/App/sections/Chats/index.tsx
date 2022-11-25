import { createUrlStorage } from '@/utils/Storage.util';
import Avatar from 'react-avatar';
import ContextDataProfile from '../../contexts/DataProfile.context';
import ContextRouter from '../../contexts/Router.context';
import { StyledAside, StyledContainerSearch, StyledHeader, StyledHeaderButtons, StyledHeaderInfo } from './styles';

const ChatsSection = () => {
    const {handleRoute} = ContextRouter();
    const {dataUser} = ContextDataProfile()

    return (
        <StyledAside>
            <StyledHeader>
                <StyledHeaderInfo onClick={() => handleRoute(2)}>
                    <Avatar 
                        className='header-img' 
                        src={dataUser.url_photo.length === 0 ? dataUser.url_photo : createUrlStorage(dataUser.url_photo,200, "users")} 
                        size='40' 
                        name={dataUser.username} 
                    />
                    <p className='header-title'>{dataUser.username}</p>
                </StyledHeaderInfo>
                <StyledHeaderButtons>
                    <i onClick={() => handleRoute(1)} className="fas fa-user-friends"></i>
                </StyledHeaderButtons>
            </StyledHeader>
            <StyledContainerSearch>
                <div className='search-input'>
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder='Buscar Chat' />
                </div>
                <p className='search-btn'>+ CREAR GRUPO</p>
            </StyledContainerSearch>
        </StyledAside>
    )
}

export default ChatsSection
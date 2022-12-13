import { createUrlStorage } from '@/utils/Storage.util';
import Avatar from 'react-avatar';
import SearchInput from '../../components/SearchInput';
import ContextDataProfile from '../../contexts/DataProfile.context';
import ContextRouter from '../../contexts/Router.context';
import ListConversations from './components/ListConversations';
import { StyledAside, StyledContainerSearch, StyledHeader, StyledHeaderButtons, StyledHeaderInfo } from './styles';

const ChatsSection = () => {
    const {handleAsideRoute} = ContextRouter();
    const {dataUser} = ContextDataProfile()

    return (
        <StyledAside>
            <StyledHeader>
                <StyledHeaderInfo onClick={() => handleAsideRoute(2)}>
                    <Avatar 
                        className='header-img' 
                        src={dataUser.url_photo.length === 0 ? dataUser.url_photo : createUrlStorage(dataUser.url_photo,200, "users")} 
                        size='40' 
                        name={dataUser.username} 
                    />
                    <p className='header-title'>{dataUser.username}</p>
                </StyledHeaderInfo>
                <StyledHeaderButtons>
                    <i onClick={() => handleAsideRoute(1)} className="fas fa-user-friends"></i>
                </StyledHeaderButtons>
            </StyledHeader>
            <StyledContainerSearch>
                <SearchInput placeholder='Buscar Chat'/>
                <p className='search-btn'>+ CREAR GRUPO</p>
                <ListConversations/>
            </StyledContainerSearch>
        </StyledAside>
    )
}

export default ChatsSection
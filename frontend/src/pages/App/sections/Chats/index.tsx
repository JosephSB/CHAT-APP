import Avatar from 'react-avatar';
import { StyledAside, StyledContainerSearch, StyledHeader, StyledHeaderButtons, StyledHeaderInfo } from './styles';

const ChatsSection = () => {
    return (
        <StyledAside>
            <StyledHeader>
                <StyledHeaderInfo>
                    <Avatar className='header-img' size='40' name="Joseph Silva" />
                    <p className='header-title'>JOSEPH SILVA B</p>
                </StyledHeaderInfo>
                <StyledHeaderButtons>
                    <i className="fas fa-user-friends"></i>
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
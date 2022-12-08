import Avatar from "react-avatar"
import { StyledBtnSendSMS, StyledFooterChat, StyledHeaderChat, StyledMainChat } from "./styles"

const BodyChat = () => {
    return(
        <StyledMainChat>
            <StyledHeaderChat>
                <Avatar
                    className='header-img' 
                    src={"joseph"} 
                    size='50' 
                    name={"joseph"} 
                />
                <p>JosephSB</p>
            </StyledHeaderChat>
            <div>
                gaa
            </div>
            <StyledFooterChat>
                <i className="fas fa-icons"></i>
                <i className="fas fa-images"></i>
                <input className="inputSMS" placeholder="Escribe tu mensaje" type="text" name="sms" />
                <StyledBtnSendSMS>
                    <i className="fas fa-paper-plane"></i>
                </StyledBtnSendSMS>
            </StyledFooterChat>
        </StyledMainChat>
    )
}

export default BodyChat
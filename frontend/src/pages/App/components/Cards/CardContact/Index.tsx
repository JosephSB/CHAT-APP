import { IProfile } from "@/pages/App/interfaces/Profile.interface"
import { createUrlStorage } from "@/utils/Storage.util"
import Avatar from "react-avatar"
import RouterButtons from "./buttons"
import { StyledBodyCardContact, StyledButtonCardContact, StyledCardContact } from "./styles"

interface props {
    data: IProfile
}

const CardContact = ({data}:props) => {
    return(
        <StyledCardContact>
            <Avatar 
                className='cardContact-img' 
                src={
                    data?.url_photo?.length === 0 ? data.username : createUrlStorage(data.url_photo,50, "users")
                } 
                size='50' 
                name={data.username} 
            />
            <StyledBodyCardContact>
                <p className="title"> {data.username} </p>
                <p className="subtitle"> {data.description} </p>
            </StyledBodyCardContact>
            <RouterButtons userID={data.user_id} />
        </StyledCardContact>
    )
}

export default CardContact
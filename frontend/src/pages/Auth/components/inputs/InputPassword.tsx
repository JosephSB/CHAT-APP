import { useState } from "react"
import { StyledContainerInput } from "./styles"

interface props{
    name: string
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    value: string
    style: string
}

const InputPassword = ({name, handleChange,placeholder, value, style}:props) => {

    const [isVisible, setIsVisible] = useState(false);

    const handleVisible = () => setIsVisible(!isVisible)
    
    return(
        <StyledContainerInput>
            <input 
                name={name}
                onChange={handleChange}
                className={style} 
                type={isVisible ? "text" :"password"}
                placeholder={placeholder}
                value={value}
            />
            {
                isVisible
                ? <i onClick={handleVisible} className="fas fa-eye-slash password-visible"></i>
                : <i onClick={handleVisible} className="fas fa-eye password-visible"></i>
            }
        </StyledContainerInput>
    )
}

export default InputPassword
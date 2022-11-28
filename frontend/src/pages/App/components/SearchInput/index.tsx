import { StyledSearchInput } from "./styles"

interface props {
    placeholder: string
}

const SearchInput = ({placeholder}:props) => {
    return(
        <StyledSearchInput>
            <i className="fas fa-search"></i>
            <input type="text" placeholder={placeholder} />
        </StyledSearchInput>
    )
}

export default SearchInput
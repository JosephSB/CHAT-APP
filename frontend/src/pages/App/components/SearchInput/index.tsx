import React, { useState } from "react";
import { StyledSearchInput } from "./styles"

interface props {
    placeholder: string
    action?: (text: string) => void
}

const SearchInput = ({ placeholder, action }: props) => {
    const [text, setText] = useState("");

    const keyDownHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            if (action) action(text);
        }
    };

    return (
        <StyledSearchInput>
            <i className="fas fa-search"></i>
            <input
                type="text"
                value={text}
                onKeyDown={keyDownHandler}
                onChange={(e) => setText(e.currentTarget.value)}
                placeholder={placeholder}
            />
        </StyledSearchInput>
    )
}

export default SearchInput
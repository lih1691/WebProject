import React from 'react';
import { SearchBarContainer, SearchInput, SearchBarCategory } from "@style/Base/SearchBar";

function SearchBar() {
    return (
        <SearchBarContainer>
            <SearchBarCategory>
                <option value={"title"}>제목</option>
                <option value={"content"}>내용</option>
                <option value={"title_and_content"}>제목+내용</option>
                <option value={"writer"}>글쓴이</option>
            </SearchBarCategory>
            <SearchInput />
        </SearchBarContainer>
    )
}

export default SearchBar;
import React from 'react';
import { FaMagnifyingGlass} from "react-icons/fa6";

import { SearchBarPositioner, SearchBarContainer,SearchInput, SearchBarCategory, SearchButton } from "@style/Base/SearchBar";

// TODO:: 검색 실행 아이콘 추가, 검색 기능 구현
function SearchBar() {
    return (
        <SearchBarPositioner>
            
            <SearchBarContainer>
                <SearchBarCategory>
                    <option value={"title"}>제목</option>
                    <option value={"content"}>내용</option>
                    <option value={"title_and_content"}>제목+내용</option>
                    <option value={"writer"}>글쓴이</option>
                </SearchBarCategory>
                <SearchInput />
                <SearchButton><FaMagnifyingGlass/></SearchButton>
            </SearchBarContainer>
        </SearchBarPositioner>
    )
}

export default SearchBar;
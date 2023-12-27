import React from 'react';
import { FaMagnifyingGlass} from "react-icons/fa6";
import { SearchBarPositioner, SearchBarForm, SearchInput, SearchBarCategory, SearchButton } from "@style/Base/SearchBar";
import {useSearch} from "@lib/Hooks/useSearch";
import {ObjectInterface} from "@Interfaces/Base/ObjectInterface";

function SearchBar()
{
    const { searchOption, keyword, handleSearchOptionChange, handleKeywordChange, handleOnSubmit}
        = useSearch();
    
    return (
        <SearchBarPositioner>
            <SearchBarForm
                action={"/search"}
                method={"get"}
                onSubmit={handleOnSubmit}
            >
                <SearchBarCategory
                    value={searchOption}
                    onChange={handleSearchOptionChange}
                >
                    <option value={"title"}>제목</option>
                    <option value={"content"}>내용</option>
                    <option value={"title_and_content"}>제목+내용</option>
                    <option value={"writer"}>글쓴이</option>
                </SearchBarCategory>
                <SearchInput
                    type={"text"}
                    value={keyword}
                    onChange={handleKeywordChange}
                />
                <SearchButton type={"submit"}>
                    <FaMagnifyingGlass/>
                </SearchButton>
            </SearchBarForm>
        </SearchBarPositioner>
    )
}

export default SearchBar;
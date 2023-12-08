import React, {useState} from 'react';
import {AsyncThunkAction} from "@reduxjs/toolkit";
import { FaMagnifyingGlass} from "react-icons/fa6";
import {useAppDispatch} from "@redux/hook";
import { SearchBarPositioner, SearchBarForm, SearchInput, SearchBarCategory, SearchButton } from "@style/Base/SearchBar";

function SearchBar() {
    const [ keyword, setKeyword ] = useState('');
    const [ searchOption, setSearchOption ] = useState('title');
    
    
    
    return (
        <SearchBarPositioner>
            <SearchBarForm
                action={"/search"}
                method={"get"}
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >
                <SearchBarCategory
                    value={searchOption}
                    onChange={(event) => setSearchOption(event.target.value)}
                >
                    <option value={"title"}>제목</option>
                    <option value={"content"}>내용</option>
                    <option value={"title_and_content"}>제목+내용</option>
                    <option value={"writer"}>글쓴이</option>
                </SearchBarCategory>
                <SearchInput
                    type={"text"}
                    value={keyword}
                    onChange={(event) => setKeyword(event.target.value)}
                />
                <SearchButton type={"submit"}>
                    <FaMagnifyingGlass/>
                </SearchButton>
            </SearchBarForm>
        </SearchBarPositioner>
    )
}

export default SearchBar;
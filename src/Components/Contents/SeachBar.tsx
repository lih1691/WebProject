import React, {useState} from 'react';
import { FaMagnifyingGlass} from "react-icons/fa6";
import { SearchBarPositioner, SearchBarForm, SearchInput, SearchBarCategory, SearchButton } from "@style/Base/SearchBar";
import { SearchInterface } from "@Interfaces/Form/SeachInterface";

function SearchBar({onSearch}: {onSearch: (searchInterface: SearchInterface) => void})
{
    const [ keyword, setKeyword ] = useState('');
    const [ searchOption, setSearchOption ] = useState('title');
    
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch({keyword, searchOption});
    }
    
    return (
        <SearchBarPositioner>
            <SearchBarForm
                action={"/search"}
                method={"get"}
                onSubmit={handleSearch}
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
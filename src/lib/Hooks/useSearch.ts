import React, {ChangeEvent, useState} from 'react';

/*
* 검색을 실행했을 시 URL을 변경하는 함수<br>
* 변경된 URL로 직접 페이지를 이동하지는 않음
* @params: {handleSetQueryParams} (key: string, value: string) => void
*/
export const useSearch = (handleSetQueryParams: (key: string, value: string) => void) => {
    const [ searchOption, setSearchOption ] = useState('title');
    const [ keyword, setKeyword ] = useState('');
    
    const handleSearchOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSearchOption(value);
    };
    
    const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setKeyword(value);
    }
    
    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSetQueryParams("search_option", searchOption);
        handleSetQueryParams("keyword", keyword);
    }
    
    return { searchOption, keyword, handleSearchOptionChange, handleKeywordChange, handleOnSubmit }
}
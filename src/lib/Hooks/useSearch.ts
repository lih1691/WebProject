import React, {ChangeEvent, useState} from 'react';
import {ObjectInterface} from "@Interfaces/Base/ObjectInterface";
import isLength from "validator/lib/isLength";

/*
* 검색을 실행했을 시 URL을 변경하는 함수<br>
* 변경된 URL로 직접 페이지를 이동하지는 않음
* @params: {handleSetQueryParams} (key: string, value: string) => void
*/
export const useSearch = (handleSetQueryParams: (params: ObjectInterface | ObjectInterface[]) => void) => {
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
        if (!isLength(keyword, {min:1})) {
            alert("최소 1글자 이상 입력하세요");
            return
        }
        
        handleSetQueryParams([
            {
                key: "search_option",
                value: searchOption
            },
            {
                key: "keyword",
                value: keyword
            }
        ])
        
        setSearchOption('title');
        setKeyword('');
    }
    
    return { searchOption, keyword, handleSearchOptionChange, handleKeywordChange, handleOnSubmit }
}
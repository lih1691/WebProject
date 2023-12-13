import {ChangeEvent} from "react";

export interface SearchInterface {
    searchOption: string,
    keyword: string
}

export interface HandleSearchChangeInterface {
    handleSearchOptionChange: ChangeEvent<HTMLSelectElement>,
    handleKeywordChange: ChangeEvent<HTMLInputElement>
}

export interface ContentsPageInterface {
    contentsType: string,
    category: string
}
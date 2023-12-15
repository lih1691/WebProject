import {Dispatch, SetStateAction} from "react";

export interface PaginationProps {
    total: number,
    currentPage: number,
    pageLimit: number,
    setCurrentPage: Dispatch<SetStateAction<number>>,
    currentPageArray: number[]
}

export interface PaginationInterface {
    contentsType: string,
    contents: any[],
    postLimitNum: number
}
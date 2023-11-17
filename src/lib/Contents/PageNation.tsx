import {Dispatch, SetStateAction, useState, useEffect} from "react";

export interface paginationProps {
    total: number,
    currentPage: number,
    pageLimit: number,
    setCurrentPage: Dispatch<SetStateAction<number>>,
    currentPageArray: number[]
}

export const usePaginationInfo = (contents: any[]) => {
    const total = contents.length;
    const [ currentPage, setCurrentPage ] = useState(0);
    
    return { total, currentPage, setCurrentPage };
}

export const usePageArray = () => {
    const [ currentPageArray, setCurrentPageArray ] = useState<number[]>([]);
    const [ totalPageArray, setTotalPageArray ] = useState<number[][]>([]);
    
    return { currentPageArray, setCurrentPageArray, totalPageArray, setTotalPageArray };
}

export const usePagination = (total: number, postLimitNum: number) => {
    const [ currentPageArray, setCurrentPageArray ] = useState<number[]>([]);
    const [ totalPageArray, setTotalPageArray ] = useState<number[][]>([]);
    
    useEffect(() => {
        const slicedPageArray = slicePageByLimit(total, postLimitNum);
        setTotalPageArray(slicedPageArray);
        setCurrentPageArray(slicedPageArray[0]);
    }, [total])
    
    return { currentPageArray, totalPageArray };
}


export const slicePageByLimit = (total: number, limit: number) => {
    const numArray = Array(total)
        .fill(1)
        .map((_, index) => index);
    
    return Array(Math.ceil(total / limit))
        .fill(1)
        .map(() => numArray.splice(0, limit));
}

export const sliceContents = (contents: any[], limit: number) => {
    return Array.from({ length: Math.ceil(contents.length / limit)}, (_, index) =>
        contents.slice(index * limit, (index + 1) * limit)
    );
}

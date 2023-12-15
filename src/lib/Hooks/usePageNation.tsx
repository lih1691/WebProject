import {Dispatch, SetStateAction, useState, useEffect} from "react";
import {useAppDispatch} from "@redux/hook";
import {setCurrentContents} from "@redux/features/ContentsSlice";
import {PaginationInterface} from "@Interfaces/Hooks/PaginationInterface";

export interface paginationProps {
    total: number,
    currentPage: number,
    pageLimit: number,
    setCurrentPage: Dispatch<SetStateAction<number>>,
    currentPageArray: number[]
}

export const usePagination = (paginationProps: PaginationInterface) => {
    const dispatch = useAppDispatch();
    const total = paginationProps.contents.length;
    const [ currentPage, setCurrentPage ] = useState(0);
    const [ currentPageArray, setCurrentPageArray ] = useState<number[]>([]);
    const [ totalPageArray, setTotalPageArray ] = useState<number[][]>([]);
    
    
    useEffect(() => {
        dispatch(setCurrentContents({
            contentsType: paginationProps.contentsType,
            pageNumber: currentPage
        }))
    }, [currentPage, paginationProps.contents]);
    
    useEffect(() => {
        const slicedPageArray = slicePageByLimit(total, paginationProps.postLimitNum);
        setTotalPageArray(slicedPageArray);
        setCurrentPageArray(slicedPageArray[0]);
    }, [total])
    
    return { total, currentPage, setCurrentPage, currentPageArray, totalPageArray };
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

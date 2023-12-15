import { useEffect } from "react";
import { useAppDispatch } from "@redux/hook";
import { fetchContents } from "@redux/features/ContentsSlice";

/*
* 서버에 저장된 콘텐츠를 가져오는 메소드
* 카테고리가 변경될 때마다 useEffect 실행
*/
export const useContents = ({contentsType, category, queryParams}:
                                {contentsType: string, category: string, queryParams?: URLSearchParams}) => {
    const dispatch = useAppDispatch();
    const searchOption = queryParams?.has("search_option") ? queryParams?.get("search_option") : null;
    const keyword = queryParams?.has("keyword") ? queryParams?.get("keyword") : null;
    
    useEffect(() => {
        dispatch(fetchContents({
            contentsType: contentsType,
            category: category,
            searchOption: searchOption,
            keyword: keyword
        }))
    }, [category, queryParams])
}
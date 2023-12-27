import { useEffect } from "react";
import { useAppDispatch } from "@redux/hook";
import { fetchContents } from "@redux/features/ContentsSlice";
import {useParams} from "react-router-dom";

/*
* 서버에 저장된 콘텐츠를 가져오는 메소드
* 카테고리가 변경될 때마다 useEffect 실행
*/
export const useContents = ({contentsType}: {contentsType: string}) => {
    const dispatch = useAppDispatch();
    const { category, searchOption, keyword } = useParams();
    
    useEffect(() => {
        dispatch(fetchContents({
            contentsType: contentsType,
            category: category,
            searchOption: searchOption,
            keyword: keyword
        }))
    }, [category, searchOption, keyword])
}
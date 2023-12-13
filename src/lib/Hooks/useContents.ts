import { useEffect } from "react";
import { useAppDispatch } from "@redux/hook";
import { fetchContents } from "@redux/features/ContentsSlice";

/*
* 서버에 저장된 콘텐츠를 가져오는 메소드
* 카테고리가 변경될 때마다 useEffect 실행
*/
export const useContents = ({contentsType, category, handleSetQueryParams}:
                                {contentsType: string, category: string, handleSetQueryParams: (key: string, value: string) => void}) => {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchContents({
            contentsType: contentsType,
            category: category,
        }))
        
        handleSetQueryParams("category", category);
    }, [dispatch, category])
    
    
}
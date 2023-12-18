import {useEffect} from "react";
import {setCurrentPageName} from "@redux/features/UISlice";
import {useAppDispatch} from "@redux/hook";

export const useSetPageName = (pageName: string) => {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(setCurrentPageName(pageName));
    }, [])
}
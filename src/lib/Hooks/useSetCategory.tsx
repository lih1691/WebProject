import {useEffect} from "react";
import { setCategory } from "@redux/features/UISlice";
import {useAppDispatch} from "@redux/hook";

export const useSetCategory = (category: string) => {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(setCategory(category));
    }, [category])
}
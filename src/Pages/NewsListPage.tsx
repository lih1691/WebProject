import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@redux/hook";
import { setCurrentPageName } from "@redux/features/UISlice";
import { fetchNewsContents } from "@redux/features/NewsContentSlice";
import { RelativePositioner } from "@style/Base/Positioner";
import { SubBanner, SubNav } from "@Components/Contents";
import { NewsPageContainer } from "@Containers/ContentsPage";
import {useNavigate} from "react-router-dom";


function NewsListPage() {
    const navigate= useNavigate();
    const category = useAppSelector((state) => state.ui.contentCategory);
    const dispatch = useAppDispatch();
    const fetch = fetchNewsContents({category});
    const uri = `/news?category=${category}`;
    
    useEffect(() => {
        dispatch(setCurrentPageName("NewsPage"));
    }, [])
    
    useEffect(() => {
        navigate(uri);
        dispatch(fetch);
    }, [dispatch, category]);
    
    return (
        <RelativePositioner>
            <SubBanner />
            <SubNav />
            <NewsPageContainer fetch={fetch}/>
        </RelativePositioner>
    )
}

export default NewsListPage;
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "@redux/hook";
import { setCurrentPageName } from "@redux/features/UISlice";
import { fetchContents } from "@redux/features/ContentsSlice";
import { RelativePositioner } from "@style/Base/Positioner";
import { SubBanner, SubNav } from "@Components/Contents";
import { NewsPageContainer } from "@Containers/ContentsPage";
import {useNavigate} from "react-router-dom";


function NewsListPage() {
    const navigate= useNavigate();
    const category = useAppSelector((state) => state.ui.contentCategory);
    const dispatch = useAppDispatch();
    const uri = `/news?category=${category}`;
    
    
    useEffect(() => {
        dispatch(setCurrentPageName("NewsPage"));
    }, [])
    
    useEffect(() => {
        navigate(uri);
        dispatch(fetchContents({category}));
    }, [dispatch, category, uri]);
    
    return (
        <RelativePositioner>
            <SubBanner />
            <SubNav />
            <NewsPageContainer />
        </RelativePositioner>
    )
}

export default NewsListPage;
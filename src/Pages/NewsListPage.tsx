import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@redux/hook";
import { setCurrentPageName } from "@redux/features/UISlice";
import { RelativePositioner } from "@style/Base/Positioner";
import { SubBanner, SubNav } from "@Components/Contents";
import { NewsPageContainer } from "@Containers/ContentsPage";

function NewsListPage() {
    const category = useAppSelector((state) => state.ui.contentCategory);
    const dispatch = useAppDispatch();
    const uri = `/news?category=${category}`;
    
    useEffect(() => {
        dispatch(setCurrentPageName("NewsPage"));
    }, [])
    
    return (
        <RelativePositioner>
            <SubBanner />
            <SubNav />
            <NewsPageContainer category={category}/>
        </RelativePositioner>
    )
}

export default NewsListPage;
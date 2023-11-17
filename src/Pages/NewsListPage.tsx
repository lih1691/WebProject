import React, {useEffect} from 'react';
import {useAppDispatch} from "@redux/hook";
import { setCurrentPageName } from "@redux/features/UISlice";
import { fetchNewsContents } from "@redux/features/NewsContentSlice";
import { RelativePositioner } from "@style/Base/Positioner";
import { SubBanner, SubNav } from "@Components/Contents";
import { NewsPageContainer } from "@Containers/ContentsPage";


function NewsListPage() {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(setCurrentPageName("NewsPage"));
        dispatch(fetchNewsContents());
    }, [dispatch]);
    
    
    return (
        <RelativePositioner>
            <SubBanner />
            <SubNav />
            <NewsPageContainer />
        </RelativePositioner>
    )
}

export default NewsListPage;
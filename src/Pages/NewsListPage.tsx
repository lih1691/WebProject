import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@redux/hook";
import { setCurrentPageName } from "@redux/features/UISlice";
import { fetchNewsContents, selectNewsContents } from "@redux/features/NewsContentSlice";
import { RelativePositioner } from "@style/Base/Positioner";
import { SubBanner, SubNav } from "@Components/Contents";
import { NewsPageContainer } from "@Containers/ContentsPage";


function NewsListPage() {
    const dispatch = useAppDispatch();
    const contents = useAppSelector(selectNewsContents);
    
    useEffect(() => {
        dispatch(setCurrentPageName("NewsPage"));
        dispatch(fetchNewsContents());
    }, [dispatch]);
    
    
    return (
        <RelativePositioner>
            <SubBanner />
            <SubNav />
            <NewsPageContainer contents={contents} />
        </RelativePositioner>
    )
}

export default NewsListPage;
import React, { useEffect } from 'react';
import {useAppDispatch, useAppSelector} from "@redux/hook";
import { setCurrentPageName} from "@redux/features/UISlice";
import { ReviewPageContainer } from "@Containers/ContentsPage";
import { SubBanner, SubNav } from "@Components/Contents";
import { RelativePositioner } from "@style/Base/Positioner";

function ReviewListPage() {
    const category = useAppSelector((state) => state.ui.contentCategory);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(setCurrentPageName("ReviewListPage"));
    }, [])
    
    return (
        <RelativePositioner>
            <SubBanner />
            <SubNav />
            <ReviewPageContainer category={category}/>
        </RelativePositioner>
    );
}

export default ReviewListPage;
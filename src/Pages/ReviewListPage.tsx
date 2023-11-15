import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { setCurrentPageName } from "@redux/features/UISlice";
import { fetchReviewContents } from "@redux/features/ReviewContentsSlice";
import { ReviewPageContainer } from "@Containers/ContentsPage";
import { selectReviewContents } from "@redux/features/ReviewContentsSlice";
import { SubBanner, SubNav } from "@Components/Contents";
import { RelativePositioner } from "@style/Base/Positioner";

function ReviewListPage() {
    const dispatch = useAppDispatch();
    const contents = useAppSelector(selectReviewContents);
    
    useEffect(() => {
        dispatch(fetchReviewContents());
        dispatch(setCurrentPageName("ReviewListPage"));
        
    },[])
    
    return (
        <RelativePositioner>
            <SubBanner />
            <SubNav />
            <ReviewPageContainer contents={contents}/>
        </RelativePositioner>
    );
}

export default ReviewListPage;
import React, { useEffect } from 'react';
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { setCurrentPageName } from "@redux/features/UISlice";
import { fetchReviewContents } from "@lib/api/contents";
import { ReviewPageContainer } from "@Containers/ReviewPage";
import { selectReviewContents } from "@redux/features/ReviewContentsSlice";
import { SubBanner, SubNav } from "@Components/Contents";

const Positioner = styled.div`
  position: relative;
  width: 100%;
`
function ReviewListPage() {
    const dispatch = useAppDispatch();
    const contents = useAppSelector(selectReviewContents);
    
    useEffect(() => {
        dispatch(fetchReviewContents(contents));
        dispatch(setCurrentPageName("ReviewListPage"));
        
    },[dispatch])
    
    return (
        <Positioner>
            <SubBanner />
            <SubNav />
            <ReviewPageContainer contents={contents}/>
        </Positioner>
    );
}

export default ReviewListPage;
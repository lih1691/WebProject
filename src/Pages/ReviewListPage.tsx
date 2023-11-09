import React from 'react';
import styled from "styled-components";
import { useAppDispatch } from "@redux/hook";
import { setCurrentPageName } from "@redux/features/UISlice";
import { ReviewPageContainer } from "@Containers/ReviewPage";

const Positioner = styled.div`
  position: relative;
  width: 100%;
`

function ReviewListPage() {
    const dispatch = useAppDispatch();
    
    dispatch(setCurrentPageName("NewsListPage"));
    
    return (
        <Positioner>
            <ReviewPageContainer />
        </Positioner>
    );
}

export default ReviewListPage;
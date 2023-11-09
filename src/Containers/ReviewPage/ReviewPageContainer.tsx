import React from 'react';
import styled from 'styled-components';
import { SubBanner } from "@Components/Contents";
import SubNav from "@Components/Contents/SubNav";
import { ReviewPageContents } from "@Components/Page/ReviewPage";

const Positioner = styled.div`
  position: relative;
  width: 100%;
`

function ReviewPageContainer() {
    return (
        <Positioner>
            <SubBanner />
            <SubNav />
            <ReviewPageContents />
        </Positioner>
    )
}

export default ReviewPageContainer;
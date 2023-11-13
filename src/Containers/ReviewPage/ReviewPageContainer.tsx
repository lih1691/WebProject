import React from 'react';
import styled from 'styled-components';
import { reviewContent } from "@redux/features/ReviewContentsSlice";
import { ContentsWrapper } from "@Components/Contents";
import { ReviewContents } from "@Components/Page/ReviewPage";
import { ContentsList } from "@style/List/ContentsList";

const Positioner = styled.div`
  position: relative;
  width: 100%;
`

function ReviewPageContainer({contents}: {contents: reviewContent[]}) {
    return (
        <Positioner>
            <ContentsWrapper>
                <ContentsList>
                    {contents.map((content, index) => (
                        <ReviewContents key={index} content={content} />
                    ))}
                </ContentsList>
            </ContentsWrapper>
        </Positioner>
    )
}

export default ReviewPageContainer;
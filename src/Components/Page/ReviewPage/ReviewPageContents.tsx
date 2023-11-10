import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { fetchReviewContents, selectReviewContents } from "@redux/features/ReviewContentsSlice";
import { ContentsWrapper} from "@Components/Contents";
import { ReviewContents } from "@Components/Page/ReviewPage";
import { ContentsList } from "@style/List/ContentsList";

function ReviewPageContents() {
    const dispatch = useAppDispatch();
    const contents = useAppSelector(selectReviewContents);
    
    useEffect(() => {
        dispatch(fetchReviewContents());
    }, [dispatch]);
    
    return (
        <ContentsWrapper>
            <ContentsList>
                {contents.map((content, index) => (
                    <ReviewContents key={index} content={content} />
                ))}
            </ContentsList>
        </ContentsWrapper>
    )
}

export default ReviewPageContents;
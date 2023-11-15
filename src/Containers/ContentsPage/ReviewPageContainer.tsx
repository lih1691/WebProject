import React, {useEffect, useState} from 'react';
import { reviewContent} from "@redux/features/ReviewContentsSlice";
import { ContentsWrapper } from "@Components/Contents";
import { ReviewContents } from "@Components/Page/ReviewPage";
import { ContentsList } from "@style/List/ContentsList";
import {setPaginationInfo, sliceContents, slicePageByLimit} from "@lib/Contents/PageNation";

function ReviewPageContainer({contents}: {contents: reviewContent[]}) {
    const { total, postLimitNum, pageLimitNum, currentPage, setCurrentPage } = setPaginationInfo(contents, 6, 10);
    const [ currentPageArray, setCurrentPageArray ] = useState<number[]>([]);
    const [ totalPageArray, setTotalPageArray ] = useState<number[][]>([]);
    const [ currentContents, setCurrentContents ] = useState<reviewContent[]>([]);
    const slicedContents = sliceContents(contents, postLimitNum);
    
    useEffect(() => {
        const slicedPageArray = slicePageByLimit(total, postLimitNum);
        setTotalPageArray(slicedPageArray);
        setCurrentPageArray(slicedPageArray[0]);
    }, [total])
    
    useEffect(() => {
        setCurrentContents(slicedContents[currentPage]);
    }, [currentPage]);
    
    return (
        <ContentsWrapper  total={total} currentPage={currentPage} setCurrentPage={setCurrentPage}>
            <ContentsList>
                {contents
                    .map((content, index) => (
                    <ReviewContents key={index} content={content} />
                ))}
            </ContentsList>
        </ContentsWrapper>
    )
}

export default ReviewPageContainer;
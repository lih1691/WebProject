import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "@redux/hook";
import {fetchReviewContents, selectReviewContents, setCurrentContents} from "@redux/features/ReviewContentsSlice";
import { ContentsWrapper, PageNumberList } from "@Components/Contents";
import { ReviewContents } from "@Components/Page/ReviewPage";
import { ContentsList } from "@style/List/ContentsList";
import {usePaginationInfo, usePagination} from "@lib/Contents/PageNation";
import NoContents from "@Components/Contents/NoContents";
import {useNavigate} from "react-router-dom";

function ReviewPageContainer({category}: {category: string}) {
    const navigate= useNavigate();
    const dispatch = useAppDispatch();
    const fetch = fetchReviewContents({category});
    const { postLimitNum, pageLimitNum, contents, currentContents } = useAppSelector(selectReviewContents);
    const { total, currentPage, setCurrentPage  } = usePaginationInfo(contents);
    const { currentPageArray} = usePagination(total, postLimitNum);
    const uri = `/review?category=${category}`;
    
    useEffect(() => {
        dispatch(setCurrentContents(currentPage));
    }, [currentPage, contents]);
    
    useEffect(() => {
        navigate(uri);
        dispatch(fetch);
    }, [dispatch, category])
    
    return (
        <ContentsWrapper >
            <ContentsList>
                {currentContents && currentContents.length > 0 ? (
                    currentContents.map((currentContent, index) => (
                        <ReviewContents key={index} content={currentContent} />
                    ))
                ) : (
                    <NoContents />
                )}
            </ContentsList>
            <PageNumberList
                total={total}
                currentPage={currentPage}
                pageLimit={pageLimitNum}
                setCurrentPage={setCurrentPage}
                currentPageArray={currentPageArray}
            />
        </ContentsWrapper>
    )
}

export default ReviewPageContainer;
import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { fetchContents, selectReviewContents, setCurrentContents} from "@redux/features/ContentsSlice";
import { ContentsWrapper, PageNumberList } from "@Components/Contents";
import { ReviewContents } from "@Components/Page/ReviewPage";
import { ContentsList } from "@style/List/ContentsList";
import { usePaginationInfo, usePagination } from "@lib/Contents/PageNation";
import NoContents from "@Components/Contents/NoContents";
import { SearchInterface } from "@Interfaces/Form/SeachInterface";

function ReviewPageContainer({category}: {category: string}) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {postLimitNum, pageLimitNum, contents, currentContents} = useAppSelector(selectReviewContents);
    const {total, currentPage, setCurrentPage} = usePaginationInfo(contents);
    const {currentPageArray} = usePagination(total, postLimitNum);
    const [uri, setURI] = useState(
        `/review?category=${category}${searchOption ? `&searchType=${searchOption}` : ''}${keyword ? `&keyword=${keyword}` : ''}`
    );
    
    const onSearch = (SearchProps: SearchInterface) => {
        setURI(`/review?category=${category}${searchOption ? `&searchType=${SearchProps.searchOption}` : ''}${keyword ? `&keyword=${SearchProps.keyword}` : ''}`);
    }
    
    useEffect(() => {
        dispatch(setCurrentContents({
            contentsType: "Review",
            pageNumber: currentPage
        }));
    }, [currentPage, contents]);
    
    useEffect(() => {
        navigate(uri);
        dispatch(fetchContents({
            contentsType: "review",
            category: category,
            searchType: searchOption,
            keyword: keyword
        }));
    }, [dispatch, category, uri])
    
    return (
        <ContentsWrapper onSearch={onSearch}>
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
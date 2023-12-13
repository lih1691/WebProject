import React from 'react';
import { useAppSelector } from "@redux/hook";
import { selectReviewContents} from "@redux/features/ContentsSlice";
import {ContentsWrapper, PageNumberList, SearchBar} from "@Components/Contents";
import { ReviewContents } from "@Components/Page/ReviewPage";
import NoContents from "@Components/Contents/NoContents";
import { ContentsList } from "@style/List/ContentsList";
import { usePaginationInfo, usePagination } from "@lib/Contents/PageNation";
import {useContents} from "@lib/Hooks/useContents";
import { useURL } from "@lib/Hooks/useURL";

function ReviewPageContainer({category}: {category: string}) {
    const {postLimitNum, pageLimitNum, contents, currentContents} = useAppSelector(selectReviewContents);
    const {total, currentPage, setCurrentPage} = usePaginationInfo("Review", contents);
    const {currentPageArray} = usePagination(total, postLimitNum);
    const { handleSetQueryParams } = useURL();
    
    useContents({
        contentsType: "Review",
        category: category,
        handleSetQueryParams: handleSetQueryParams
    });
    
    return (
        <ContentsWrapper >
            <SearchBar handleSetQueryParams={handleSetQueryParams}/>
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
import React from 'react';
import { useAppSelector } from "@redux/hook";
import { selectReviewContents} from "@redux/features/ContentsSlice";
import {ContentsWrapper, PageNumberList, SearchBar} from "@Components/Contents";
import { ReviewContents } from "@Components/Page/ReviewPage";
import NoContents from "@Components/Contents/NoContents";
import { ContentsList } from "@style/List/ContentsList";
import { usePagination } from "@lib/Hooks/usePageNation";
import {useContents} from "@lib/Hooks/useContents";
import { useURL } from "@lib/Hooks/useURL";
import {selectCurrentCategory} from "@redux/features/UISlice";
import {useSetPageName} from "@lib/Hooks/useSetPageName";

function ReviewPageContainer() {
    const category = useAppSelector(selectCurrentCategory)
    const {postLimitNum, pageLimitNum, contents, currentContents} = useAppSelector(selectReviewContents);
    useSetPageName("ReviewPage");
    const { total, currentPage, setCurrentPage, currentPageArray }
        = usePagination({
                                        contentsType:"Review",
                                        contents: contents,
                                        postLimitNum: postLimitNum
        });
    
    const { queryParams, handleSetQueryParams } = useURL({
        key: "category",
        value: category
    });
    
    useContents({
        contentsType: "Review",
        category: category,
        queryParams: queryParams
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
                    <NoContents left={"50%"}/>
                )}
            </ContentsList>
            {
                currentContents && currentContents.length > 0 ? (
                    <PageNumberList
                        total={total}
                        currentPage={currentPage}
                        pageLimit={pageLimitNum}
                        setCurrentPage={setCurrentPage}
                        currentPageArray={currentPageArray}
                    />
                ) : null
            }
            
        </ContentsWrapper>
    )
}

export default ReviewPageContainer;
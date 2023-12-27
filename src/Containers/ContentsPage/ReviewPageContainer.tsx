import React from 'react';
import { useAppSelector } from "@redux/hook";
import { selectReviewContents} from "@redux/features/ContentsSlice";
import {ContentsWrapper, PageNumberList, SearchBar, NoContents, PostButton } from "@Components/Contents";
import { ReviewContents } from "@Components/Page/ReviewPage";
import { ContentsList } from "@style/List/ContentsList";
import { usePagination } from "@lib/Hooks/usePageNation";
import { useContents } from "@lib/Hooks/useContents";
import { useSetPageName } from "@lib/Hooks/useSetPageName";
import {PostButtonWrapper} from "@style/Community/Post";

function ReviewPageContainer() {
    const {postLimitNum, pageLimitNum, contents, currentContents} = useAppSelector(selectReviewContents);
    useSetPageName("ReviewPage");
    
    useContents({contentsType: "Review"});

    const { total, currentPage, setCurrentPage, currentPageArray }
        = usePagination({
        contentsType:"Review",
        contents: contents,
        postLimitNum: postLimitNum
    });
    
    return (
        <ContentsWrapper >
            <SearchBar />
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
            
            <PostButtonWrapper>
                <PostButton to={""}>
                    전체글
                </PostButton>
                <PostButton to={"write"}>
                    글쓰기
                </PostButton>
            </PostButtonWrapper>
            
        </ContentsWrapper>
    )
}

export default ReviewPageContainer;
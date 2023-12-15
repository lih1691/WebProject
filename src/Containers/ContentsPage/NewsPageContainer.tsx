import React from 'react';
import { useAppSelector } from "@redux/hook";
import { selectNewsState } from "@redux/features/ContentsSlice";
import { ContentsWrapper, PageNumberList } from "@Components/Contents";
import NoContents from "@Components/Contents/NoContents";
import { NewsContents } from "@Components/Page/NewsPage";
import { ContentsList } from "@style/List/ContentsList";
import { usePagination } from "@lib/Hooks/usePageNation";



function NewsPageContainer({category}: {category: string}) {
    const { postLimitNum, pageLimitNum, contents, currentContents } = useAppSelector(selectNewsState);
    const { total, currentPage, setCurrentPage, currentPageArray }
        = usePagination({
        contentsType:"News",
        contents: contents,
        postLimitNum: postLimitNum
    });
    
    // useContents({
    //     contentsType: "News",
    //     category: category
    // });
    
    return (
        <ContentsWrapper>
            <ContentsList>
                {currentContents && currentContents.length > 0 ? (
                    currentContents.map((currentContent, index) => (
                        <NewsContents key={index} content={currentContent} />
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

export default NewsPageContainer;
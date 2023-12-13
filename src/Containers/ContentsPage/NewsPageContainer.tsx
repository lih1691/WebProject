import React from 'react';
import { useAppDispatch, useAppSelector} from "@redux/hook";
import { selectNewsState } from "@redux/features/ContentsSlice";
import { ContentsWrapper, PageNumberList } from "@Components/Contents";
import { NewsContents } from "@Components/Page/NewsPage";
import { ContentsList } from "@style/List/ContentsList";
import { usePagination, usePaginationInfo } from "@lib/Contents/PageNation";
import NoContents from "@Components/Contents/NoContents";


function NewsPageContainer({category}: {category: string}) {
    const { postLimitNum, pageLimitNum, contents, currentContents } = useAppSelector(selectNewsState);
    const { total, currentPage, setCurrentPage  } = usePaginationInfo("News", contents);
    const { currentPageArray} = usePagination(total, postLimitNum);
    
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
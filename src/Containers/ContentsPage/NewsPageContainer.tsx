import React, {Dispatch, SetStateAction, useEffect} from 'react';
import { useAppDispatch, useAppSelector} from "@redux/hook";
import { selectNewsState, setCurrentContents } from "@redux/features/ContentsSlice";
import { ContentsWrapper, PageNumberList } from "@Components/Contents";
import { NewsContents } from "@Components/Page/NewsPage";
import { ContentsList } from "@style/List/ContentsList";
import { usePagination, usePaginationInfo } from "@lib/Contents/PageNation";
import NoContents from "@Components/Contents/NoContents";

function NewsPageContainer() {
    const dispatch = useAppDispatch();
    const { postLimitNum, pageLimitNum, contents, currentContents } = useAppSelector(selectNewsState);
    const { total, currentPage, setCurrentPage  } = usePaginationInfo(contents);
    const { currentPageArray} = usePagination(total, postLimitNum);
    
    useEffect(() => {
        dispatch(setCurrentContents({
            contentsType: "News",
            pageNumber: currentPage
        }));
    }, [currentPage, contents]);
    
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
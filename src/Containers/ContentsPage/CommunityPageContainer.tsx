import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@redux/hook";
import { selectCommunityContents, setCurrentContents } from "@redux/features/CommunitySlice";
import {Community, PostContents} from "@Components/Page/Community";
import { ContentsWrapper, PageNumberList } from "@Components/Contents";
import NoContents from "@Components/Contents/NoContents";
import { usePagination, usePaginationInfo } from "@lib/Contents/PageNation";
import {AsyncThunkAction} from "@reduxjs/toolkit";

function CommunityPageContainer({fetch}: {fetch: AsyncThunkAction<any, string, any>}) {
    const dispatch = useAppDispatch();
    const { postLimitNum, pageLimitNum, contents, currentContents } = useAppSelector(selectCommunityContents);
    const { total, currentPage, setCurrentPage  } = usePaginationInfo(contents);
    const { currentPageArray} = usePagination(total, postLimitNum);
    
    useEffect(() => {
        dispatch(setCurrentContents(currentPage));
    }, [currentPage, contents]);
    
    return (
        <ContentsWrapper fetch={fetch}>
            <Community>
                {currentContents && currentContents.length > 0 ? (
                    currentContents.slice().reverse().map((currentContent, index) => (
                        <PostContents key={index} content={currentContent} />
                    ))
                ) : (
                    <NoContents />
                )}
            </Community>
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

export default CommunityPageContainer;
import React from 'react';
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { selectCommunityState} from "@redux/features/ContentsSlice";
import {Community, PostContents} from "@Components/Page/Community";
import { ContentsWrapper, PageNumberList } from "@Components/Contents";
import NoContents from "@Components/Contents/NoContents";
import { usePagination, usePaginationInfo } from "@lib/Contents/PageNation";


function CommunityPageContainer({category}: {category: string}) {
    const { postLimitNum, pageLimitNum, contents, currentContents } = useAppSelector(selectCommunityState);
    const { total, currentPage, setCurrentPage  } = usePaginationInfo("Community", contents);
    const { currentPageArray} = usePagination(total, postLimitNum);
    
    // useContents({
    //     contentsType: "Community",
    //     category: category
    // });
    //
    
    return (
        <ContentsWrapper >
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
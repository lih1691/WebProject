import React from 'react';
import { useAppSelector } from "@redux/hook";
import { selectCommunityState} from "@redux/features/ContentsSlice";
import {Community, PostContents} from "@Components/Page/Community";
import { ContentsWrapper, PageNumberList } from "@Components/Contents";
import NoContents from "@Components/Contents/NoContents";
import { usePagination } from "@lib/Hooks/usePageNation";
import {NoDataContents} from "@style/Community/Post";


function CommunityPageContainer({category}: {category: string}) {
    const { postLimitNum, pageLimitNum, contents, currentContents } = useAppSelector(selectCommunityState);
    const { total, currentPage, setCurrentPage, currentPageArray }
        = usePagination({
        contentsType:"Community",
        contents: contents,
        postLimitNum: postLimitNum
    });
    // useContents({
    //     contentsType: "Community",
    //     category: category
    // });
    //
    
    return (
        <ContentsWrapper >
            <Community>
                {currentContents && currentContents.length > 0 ? (
                    <tbody>
                    {
                        currentContents.slice().reverse().map((currentContent, index) => (
                            <PostContents key={index} content={currentContent} />
                        ))
                    }
                    </tbody>
                ) : (
                    <NoDataContents colSpan={7}>
                        <NoContents left={"auto"}/>
                    </NoDataContents>
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
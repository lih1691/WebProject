import React, {ReactNode} from 'react';
import { ContentsWrapper } from "@Components/Contents";
import { Table, TableRow, HeadContents} from "@style/Community/Post";
import { postWidthState } from "@style/Community/Post";

function Community({children}: {children: ReactNode}) {
    const { postNumberWidth, tagWidth, titleWidth, writerWidth, dateWidth, viewsWidth, recommendationWidth} = postWidthState;
    
    return (
        <ContentsWrapper>
            <Table>
                <thead>
                    <TableRow>
                        <HeadContents width={postNumberWidth}>번호</HeadContents>
                        <HeadContents width={tagWidth}>말머리</HeadContents>
                        <HeadContents width={titleWidth}>제목</HeadContents>
                        <HeadContents width={writerWidth}>글쓴이</HeadContents>
                        <HeadContents width={dateWidth}>작성일</HeadContents>
                        <HeadContents width={viewsWidth}>조회수</HeadContents>
                        <HeadContents width={recommendationWidth}>추천수</HeadContents>
                    </TableRow>
                </thead>
                {children}
            </Table>
        </ContentsWrapper>
    )
}

export default Community;
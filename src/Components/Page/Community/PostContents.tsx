import React from 'react';
import { CommunityContent } from "@Interfaces/Redux/ContentsInterface";
import { DataContents, TableRow } from "@style/Community/Post";
import { postWidthState } from "@style/Community/Post";


function PostContents({content}: {content: CommunityContent}) {
    const { postNumberWidth, tagWidth, titleWidth, writerWidth, dateWidth, viewsWidth, recommendationWidth}
        = postWidthState;
    
    return (
        <TableRow>
            <DataContents width={postNumberWidth} >{content.postNumber}</DataContents>
            <DataContents width={tagWidth} >{content.tag}</DataContents>
            <DataContents width={titleWidth} >{content.title}</DataContents>
            <DataContents width={writerWidth} >{content.writer}</DataContents>
            <DataContents width={dateWidth} >{content.date}</DataContents>
            <DataContents width={viewsWidth} >{content.views}</DataContents>
            <DataContents width={recommendationWidth} >{content.recommendation}</DataContents>
        </TableRow>
    )
}

export default PostContents;
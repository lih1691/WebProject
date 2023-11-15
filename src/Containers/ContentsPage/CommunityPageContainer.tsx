import React from 'react';
import { Community } from "@Components/Page/Community";
import { communityContent } from "@redux/features/CommunitySlice";
import PostContents from "@Components/Page/Community/PostContents";
import { ContentsWrapper } from "@Components/Contents";

function CommunityPageContainer({contents}: {contents: communityContent[]}) {
    return (
        <ContentsWrapper>
            <Community>
                <tbody>
                {contents.slice().reverse().map((content) => (
                    <PostContents content={content} />
                ))}
                </tbody>
            </Community>
        </ContentsWrapper>
    )
}

export default CommunityPageContainer;
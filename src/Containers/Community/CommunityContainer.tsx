import React from 'react';
import { Community } from "@Components/Page/Community";
import  {communityContent } from "@redux/features/CommunitySlice";
import PostContents from "../../Components/Page/Community/PostContents";

function CommunityContainer({contents}: {contents: communityContent[]}) {
    return (
        <Community>
            <tbody>
                {contents.map((content) => (
                    <PostContents content={content} />
                ))}
            </tbody>
        </Community>
    )
}

export default CommunityContainer;
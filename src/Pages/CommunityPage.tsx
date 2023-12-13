import React from 'react';
import {useAppSelector} from "@redux/hook";
import { SubBanner, SubNav } from "@Components/Contents";
import { CommunityPageContainer } from "@Containers/ContentsPage";
import { RelativePositioner } from "@style/Base/Positioner";

function CommunityPage() {
    const category = useAppSelector((state) => state.ui.contentCategory);
    
    return (
        <RelativePositioner>
            <SubBanner />
            <SubNav />
            <CommunityPageContainer category={category}/>
        </RelativePositioner>
    )
}

export default CommunityPage;
import React from 'react';
import {RelativePositioner} from "@style/Base/Positioner";
import {SubBanner, SubNav} from "@Components/Contents";
import {Route, Routes} from "react-router-dom";
import {CommunityPageContainer, NewsPageContainer, ReviewPageContainer} from "@Containers/ContentsPage";

function ContentsPage() {
    
    return (
        <RelativePositioner>
            <SubBanner />
            <SubNav />
            <Routes>
                <Route path={"/news"} element={<NewsPageContainer />}/>
                <Route path={"/review"} element={<ReviewPageContainer />}/>
                <Route path={"/community"} element={<CommunityPageContainer />}/>
            </Routes>
        </RelativePositioner>
    )
}

export default ContentsPage;
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
                <Route
                    path="/review/:category/:searchOption?/:keyword?"
                    element={<ReviewPageContainer />}
                />
                <Route
                    path="/community/:category/:searchOption/:keyword"
                    element={<CommunityPageContainer />}
                />
            </Routes>
        </RelativePositioner>
    )
}

export default ContentsPage;
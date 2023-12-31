import React from 'react';
import {RelativePositioner} from "@style/Base/Positioner";
import {SubBanner, SubNav} from "@Components/Contents/Sub";
import {Route, Routes} from "react-router-dom";
import {CommunityPageContainer, NewsPageContainer, ReviewPageContainer} from "@Containers/ContentsPage";
import PostPageContainer from "@Containers/ContentsPage/PostPageContainer";

function ContentsPage() {
    return (
        <RelativePositioner>
            <SubBanner />
            <SubNav />
            <Routes>
                <Route path={"/news/:category/:searchOption?/:keyword?"}
                       element={<NewsPageContainer />}/>
                <Route
                    path="/review/:category/:searchOption?/:keyword?"
                    element={<ReviewPageContainer />}
                />
                <Route
                    path="/community/:category/:searchOption?/:keyword?"
                    element={<CommunityPageContainer />}
                />
                <Route
                    path={"/post/:contentsType/:category"}
                    element={<PostPageContainer />}
                />
            </Routes>
        </RelativePositioner>
    )
}

export default ContentsPage;
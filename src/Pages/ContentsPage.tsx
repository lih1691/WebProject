import React from 'react';
import {RelativePositioner} from "@style/Base/Positioner";
import {SubBanner, SubNav} from "@Components/Contents";
import {Route, Routes} from "react-router-dom";
import {CommunityPageContainer, NewsPageContainer, ReviewPageContainer} from "@Containers/ContentsPage";
import {useAppSelector} from "@redux/hook";
import {selectCurrentCategory} from "@redux/features/UISlice";

function ContentsPage() {
    return (
        <RelativePositioner>
            <SubBanner />
            <SubNav />
            <Routes>
                <Route path={"/news"} element={<NewsPageContainer />}/>
                <Route
                    path="/review/:category/:search_option?/:keyword?"
                    element={<ReviewPageContainer />}
                />
                <Route
                    path="/community/:category/:search_option/:keyword"
                    element={<CommunityPageContainer />}
                />
            </Routes>
        </RelativePositioner>
    )
}

export default ContentsPage;
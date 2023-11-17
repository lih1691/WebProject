import React, {useEffect} from 'react';
import { useAppDispatch } from "@redux/hook";
import { fetchCommunityContents } from "@redux/features/CommunitySlice";
import { setCurrentPageName } from "@redux/features/UISlice";
import { SubBanner, SubNav } from "@Components/Contents";
import { CommunityPageContainer } from "@Containers/ContentsPage";
import { RelativePositioner } from "@style/Base/Positioner";

function CommunityPage() {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(setCurrentPageName("CommunityPage"));
        dispatch(fetchCommunityContents());
    }, [dispatch]);
    
    return (
        <RelativePositioner>
            <SubBanner />
            <SubNav />
            <CommunityPageContainer />
        </RelativePositioner>
    )
}

export default CommunityPage;
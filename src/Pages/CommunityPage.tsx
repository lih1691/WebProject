import React, {useEffect} from 'react';
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { fetchCommunityContents, selectCommunityContents } from "@redux/features/CommunitySlice";
import { setCurrentPageName } from "@redux/features/UISlice";
import { SubBanner, SubNav } from "@Components/Contents";
import { CommunityPageContainer } from "@Containers/ContentsPage";
import { RelativePositioner } from "@style/Base/Positioner";

function CommunityPage() {
    const dispatch = useAppDispatch();
    const contents = useAppSelector(selectCommunityContents);
    
    useEffect(() => {
        dispatch(setCurrentPageName("CommunityPage"));
        dispatch(fetchCommunityContents());
    }, [dispatch]);
    
    return (
        <RelativePositioner>
            <SubBanner />
            <SubNav />
            <CommunityPageContainer contents={contents}/>
        </RelativePositioner>
    )
}

export default CommunityPage;
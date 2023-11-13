import React, {useEffect} from 'react';
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { fetchCommunityContents, selectCommunityContents } from "@redux/features/CommunitySlice";
import { setCurrentPageName } from "@redux/features/UISlice";
import { SubBanner, SubNav } from "@Components/Contents";
import { CommunityContainer } from "@Containers/Community";

const Positioner = styled.div`
  position: relative;
  width: 100%;
`
function CommunityPage() {
    const dispatch = useAppDispatch();
    const contents = useAppSelector(selectCommunityContents);
    
    useEffect(() => {
        dispatch(setCurrentPageName("CommunityPage"));
        dispatch(fetchCommunityContents);
    }, [dispatch]);
    
    return (
        <Positioner>
            <SubBanner />
            <SubNav />
            <CommunityContainer contents={contents}/>
        </Positioner>
    )
}

export default CommunityPage;
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@redux/hook";
import { fetchContents } from "@redux/features/ContentsSlice";
import { setCurrentPageName } from "@redux/features/UISlice";
import { SubBanner, SubNav } from "@Components/Contents";
import { CommunityPageContainer } from "@Containers/ContentsPage";
import { RelativePositioner } from "@style/Base/Positioner";
import {useNavigate} from "react-router-dom";

function CommunityPage() {
    const navigate= useNavigate();
    const category = useAppSelector((state) => state.ui.contentCategory);
    const dispatch = useAppDispatch();
    const uri = `/community?category=${category}`;
    
    useEffect(() => {
        navigate(uri);
        dispatch(setCurrentPageName("CommunityPage"));
        dispatch(fetchContents({category}));
    }, [dispatch, category]);
    
    return (
        <RelativePositioner>
            <SubBanner />
            <SubNav />
            <CommunityPageContainer />
        </RelativePositioner>
    )
}

export default CommunityPage;
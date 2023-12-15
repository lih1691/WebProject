import React, {useEffect} from 'react';
import { useAppDispatch } from "@redux/hook";
import { setCurrentPageName} from "@redux/features/UISlice";
import { ReviewPageContainer } from "@Containers/ContentsPage";
import { SubBanner, SubNav } from "@Components/Contents";
import { RelativePositioner } from "@style/Base/Positioner";

function ReviewListPage() {
    
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(setCurrentPageName("ReviewListPage"));
    }, [])
    
    return (
        <RelativePositioner>
            <SubBanner />
            <SubNav />
            <ReviewPageContainer />
        </RelativePositioner>
    );
}

export default ReviewListPage;
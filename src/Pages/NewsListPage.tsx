import React from 'react';
import styled from "styled-components";
import { useAppDispatch } from "@redux/hook";
import { NewsPageContainer} from "@Containers/NewsPage";
import { setCurrentPageName } from "@redux/features/UISlice";

const Positioner = styled.div`
  position: relative;
  width: 100%;
`

function NewsListPage() {
    const dispatch = useAppDispatch();
    
    dispatch(setCurrentPageName("NewsListPage"));
    
    return (
        <Positioner>
            <NewsPageContainer />
        </Positioner>
    );
}

export default NewsListPage;
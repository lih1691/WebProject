import React from 'react';
import styled from "styled-components";
import { useAppDispatch } from "@redux/hook";
import { ReviewPageContainer} from "Containers/ReviewPage";
import { setCurrentPageName } from "@redux/features/UISlice";

const Positioner = styled.div`
  position: relative;
  width: 100%;
`

function NewsListPage() {
    return (
        <Positioner>
            
        </Positioner>
    )
}

export default NewsListPage;
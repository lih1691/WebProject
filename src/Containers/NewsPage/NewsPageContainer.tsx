import React from 'react';
import styled from 'styled-components';
import { SubBanner} from "@Components/Contents/SubBanner";
import SubNav from "@Components/Contents/SubNav/SubNav";
import { NewsPageContents } from "@Components/Page/NewsPage";

const Positioner = styled.div`
  position: relative;
  width: 100%;
`

function NewsPageContainer() {
    return (
        <Positioner>
            <SubBanner />
            <SubNav />
            <NewsPageContents />
        </Positioner>
    )
}

export default NewsPageContainer;
import React from 'react';
import styled from 'styled-components';
import { SubBanner} from "@Components/Base/SubBanner";
import SubNav from "@Components/Base/SubNav/SubNav";
import { PageContents } from "@style/Base/PageContents";

const Positioner = styled.div`
  position: relative;
  width: 100%;
`

function NewsPageContainer() {
    return (
        <Positioner>
            <SubBanner />
            <SubNav />
            <PageContents />
        </Positioner>
    )
}

export default NewsPageContainer;
import React from 'react';
import styled from "styled-components";
import { NewsPageContainer} from "@Containers/NewsPage";

const Positioner = styled.div`
  position: relative;
  width: 100%;
`

function NewsListPage() {
    return (
        <Positioner>
            <NewsPageContainer></NewsPageContainer>
        </Positioner>
    );
}

export default NewsListPage;
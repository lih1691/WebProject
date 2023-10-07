import React from 'react';
import styled from "styled-components";

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

function CommunityPage() {
    return (
        <Positioner>
            <h1>커뮤니티 페이지</h1>
        </Positioner>
    )
}

export default CommunityPage;
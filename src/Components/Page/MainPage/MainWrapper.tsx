import React, {ReactNode} from 'react';
import styled from 'styled-components';

const WrapperContainer = styled.div`
  width: 100%; /* 원하는 너비 설정 */
  height: 100vh; /* 원하는 높이 설정 (예: 뷰포트 높이) */
`;

const Positioner = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
`

function MainWrapper({children}: {children: ReactNode}) {
    return (
        <Positioner>
            {children}
        </Positioner>
    )
}

export default MainWrapper;
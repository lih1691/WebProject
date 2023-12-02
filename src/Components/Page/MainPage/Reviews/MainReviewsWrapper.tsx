import React, {ReactNode} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 60px 0 40px;
  letter-spacing: -.2px;
`

function MainReviewsWrapper({children}: {children: ReactNode}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default MainReviewsWrapper;
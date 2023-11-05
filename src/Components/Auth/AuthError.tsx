import React, {ReactNode} from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: ${oc.red[7]};
    font-weight: 500;
    text-align: center;
`;

function AuthError({children}: {children: ReactNode}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default AuthError;
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {media} from "@lib/styleUtil";

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
`;

const WhiteBackground = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    height: auto;
`;

const FooterContents = styled.div`
    width: 1200px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
    ${media.wide`
        width: 992px;
    `}

    ${media.tablet`
        width: 100%;
    `}
`;

function Footer({children} : {children : ReactNode}) {
    return (
        <Positioner>
            <WhiteBackground>
                <FooterContents>

                </FooterContents>
            </WhiteBackground>
        </Positioner>
    );
}

export default Footer;
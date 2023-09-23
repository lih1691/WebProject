import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {media, Spacer } from '@lib/styleUtil';
import MenuLink from '@Components/Base/Menu';

const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    gap: 20px;
    width: 100%;
`;

const BlackBackground = styled.div`
  background: black;
  height: auto;
  opacity: 0.8;
`

const MenuContents = styled.div`
    width: 500px;
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

function MenuBar( {children }: { children: ReactNode}) {
    return (
        <Positioner>
            <BlackBackground>
                <MenuContents>
                    <h3>메뉴</h3>
                </MenuContents>
            </BlackBackground>
        </Positioner>
    );
}

export default MenuBar;
import React, {ReactNode} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import oc from 'open-color';
import { media } from '@lib/styleUtil';

// 상단 고정
const Positioner = styled.div<{$currentPageName: string, $isHovered: boolean}>`
  display: flex;
  flex-direction: column;
  position: ${(props) => props.$currentPageName === "MainPage" ? "fixed" : "absolute"};
  justify-content: space-between;
  top: 0;
  width: 100%;
  min-width: 1500px;
  background: ${(props) => props.$isHovered ? oc.gray[0] : "none"};
  transition: .2s ;
  z-index: 10;
`;


const HeaderBackground = styled.div<{$isHovered: boolean}>`
    background: ${(props) => props.$isHovered ? oc.gray[0] : "none"};
    display: flex;
    justify-content: center;
    height: auto;
`;


const HeaderContents = styled.div`
    width: 1200px;
    height: 125px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
  
    ${media.tablet`
        width: 100%;
    `}
`;

const LogoLink = styled(Link)`
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: ${oc.teal[7]};
  font-family: 'Oswald';
  margin: 20px;
  text-decoration: none;
`;

// TODO: 메인 페이지 외에는 페이지 최상단에 고정, 메인 페이지 외에서 signLink 색상 조정
function Header ({currentPageName, isHovered, children}: {currentPageName: string, isHovered: boolean, children: ReactNode}) {
    
    return (
        <Positioner $currentPageName={currentPageName} $isHovered={isHovered}>
            <HeaderBackground $isHovered={isHovered}>
                <HeaderContents>
                    <LogoLink to={"/"}>Logo</LogoLink>
                    {children}
                </HeaderContents>
            </HeaderBackground>
        </Positioner>
    );
}

export default Header;
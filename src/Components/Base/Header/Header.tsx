import React, {ReactNode} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import oc from 'open-color';
import { media } from '@lib/styleUtil';

// 상단 고정
const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: space-between;
  top: 0;
  width: 100%;
  min-width: 1500px;
  transition: .2s ;
  z-index: 10;
  
  &:hover {
    background-color: white;
  }
`;

// 흰 배경, 내용 중간 정렬
const HeaderBackground = styled.div`
    background: transparent;
    display: flex;
    justify-content: center;
    height: auto;
`;

// 해더의 내용
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

    &:hover {
      div {
          a {
            color: ${oc.gray[9]};
          }
      }
    }
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
function Header ({children}: {children: ReactNode}) {
    return (
        <Positioner>
            <HeaderBackground>
                <HeaderContents>
                    <LogoLink to={"/"}>Logo</LogoLink>
                    {children}
                </HeaderContents>
            </HeaderBackground>
        </Positioner>
    );
}

export default Header;
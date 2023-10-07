import React, {ReactNode} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import oc from 'open-color';
import { media } from '@lib/styleUtil';
import MenuBar from "@Components/Base/Menu";

// 상단 고정, 그림자
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: space-between;
    top: 0;
    width: 100%;
    transition: .2s ;
  
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
    height: 100px;
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

    &:hover {
      div {
          a {
            color: ${oc.gray[9]};
          }
      }
    }
`;

// 중간 여백
export const Spacer = styled.div`
    flex-grow: 1;
`;

const LogoLink = styled(Link)`
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: ${oc.teal[7]};
  font-family: 'Rajdhani';
  margin: 20px;
  text-decoration: none;
`;

function Header ({children}: {children: ReactNode}) {
    return (
        <Positioner>
            <HeaderBackground>
                <HeaderContents>
                    <LogoLink to={"/"}>Logo</LogoLink>
                    <MenuBar/>
                    <Spacer/>
                    {children}
                </HeaderContents>
            </HeaderBackground>
        </Positioner>
    );
}

export default Header;
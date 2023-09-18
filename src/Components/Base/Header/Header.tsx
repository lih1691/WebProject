import React, {ReactNode} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import oc from 'open-color';
import {  media } from '@lib/styleUtil';

// 상단 고정, 그림자
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    width: 100%;
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
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

// 로고
const Logo = styled.div`
    font-size: 1.4rem;
    letter-spacing: 2px;
    color: ${oc.teal[7]};
    font-family: 'Rajdhani';
    text-decoration-line: none;
`;

// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

interface HeaderProps {
    children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({children}) => {
    return (
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                    <Link to={"/"} style={{ textDecoration: "none"}}>
                        <Logo>Logo</Logo>
                    </Link>
                    <Spacer/>
                    {children}
                </HeaderContents>
            </WhiteBackground>
        </Positioner>
    );
}

export default Header;
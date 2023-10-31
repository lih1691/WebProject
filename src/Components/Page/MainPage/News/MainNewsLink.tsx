import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { MainNewsWrapper } from '@Components/Page/MainPage/News';
import { MainNewsTitle } from '@Components/Page/MainPage/News/MainNewsTitle';
import { MainNewsText } from '@Components/Page/MainPage/News/MainNewsText';
import { NewsDate } from "@Components/Page/MainPage/News/NewsDate";

const NewsLink = styled(Link)<{$isHovered: boolean}>`
  display: block;
  height: 100%;
  padding: 55px 55px 0;
  text-decoration: none;
`

function MainNewsLink({title, text, date, isHovered}: {title: string, text:string, date: string, isHovered: boolean}) {
    
    return (
        <NewsLink
            to={"/"}
            $isHovered={isHovered}
        >
            <MainNewsWrapper>
                <MainNewsTitle>{title}</MainNewsTitle>
                <MainNewsText>{text}</MainNewsText>
                <NewsDate $isHovered={isHovered}>{date}</NewsDate>
            </MainNewsWrapper>
        </NewsLink>
    )
}

export default MainNewsLink;
import React from "react";
import styled from 'styled-components';
import { HoverCheckLink } from "@style/Link/HoverCheckLink";
import { MainReviewsWrapper} from "@Components/Page/MainPage/Reviews";
import { MainReviewsTitle } from '@Components/Page/MainPage/Reviews/MainReviewsTitle';
import { MainReviewsText } from '@Components/Page/MainPage/Reviews/MainReviewsText';
import { NewsDate } from "@Components/Page/MainPage/Reviews/NewsDate";

const NewsLink = styled(HoverCheckLink)`
  padding: 55px 55px 0;
`

function MainReviewsLink({title, text, date, isHovered}: {title: string, text:string, date: string, isHovered: boolean}) {
    
    return (
        <NewsLink
            to={"/"}
            $isHovered={isHovered}
        >
            <MainReviewsWrapper>
                <MainReviewsTitle>{title}</MainReviewsTitle>
                <MainReviewsText>{text}</MainReviewsText>
                <NewsDate $isHovered={isHovered}>{date}</NewsDate>
            </MainReviewsWrapper>
        </NewsLink>
    )
}

export default MainReviewsLink;
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { HorizontalCompactList } from "@style/List/HorizontalList";
import { MainReviewsItem } from "@Components/Page/MainPage/Reviews/index";

interface ReviewListInterface {
    $focus: boolean;
    $fadeInTransition: string;
    $fadeOutTransition: string;
}

const ReviewsList = styled(HorizontalCompactList)<ReviewListInterface>`
  opacity: ${props => (props.$focus ? 1: 0)};
  width: 100%;
  border: 1px solid ${oc.gray[5]};
  background-color: ${oc.gray[0]};
  transform: translateX(${props => (props.$focus ? 0 :"50px")});
  transition: ${props => (props.$focus ? props.$fadeInTransition : props.$fadeOutTransition)};
`

function MainReviewsList({currentSectionIndex}: {currentSectionIndex: number}) {
    return (
        <ReviewsList
            $focus={currentSectionIndex === 2}
            $fadeInTransition={"all .5s .4s"}
            $fadeOutTransition={"all .4s"}
        >
            <MainReviewsItem title={"11111111"} text={"2222222222"} date={"2023.10"}/>
            <MainReviewsItem title={"11111111"} text={"2222222222"} date={"2023.10"}/>
            <MainReviewsItem title={"11111111"} text={"2222222222"} date={"2023.10"}/>
            <MainReviewsItem title={"11111111"} text={"2222222222"} date={"2023.10"}/>
        </ReviewsList>
    )
}

export default MainReviewsList;

import React from 'react';
import styled from "styled-components";
import { Section } from '@style/Pages/Section';
import { TitleArea } from "@Components/Page/MainPage/Reviews";
import MainReviewsList from "@Components/Page/MainPage/Reviews/MainReviewsList";
import {checkCurrentSectionIndex} from "@lib/Hooks/MainPageHandler";

const MainReviewsSection = styled(Section)`
  padding: 0 10%;
`

function ReviewsContainer({currentSectionIndex}: {currentSectionIndex: number}) {
    const focus = checkCurrentSectionIndex(currentSectionIndex, 2);
    
    return (
        <MainReviewsSection className={"article"}>
            <TitleArea title={"Reviews"} focus={focus}/>
            <MainReviewsList focus={focus}/>
        </MainReviewsSection>
    )
}

export default ReviewsContainer;
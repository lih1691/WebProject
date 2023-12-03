import React from 'react';
import styled from "styled-components";
import { Section } from '@style/Pages/Section';
import { TitleArea } from "@Components/Page/MainPage/Reviews";
import MainReviewsList from "@Components/Page/MainPage/Reviews/MainReviewsList";

const MainReviewsSection = styled(Section)`
  padding: 0 10%;
`

function ReviewsContainer({currentSectionIndex}: {currentSectionIndex: number}) {
    return (
        <MainReviewsSection className={"article"}>
            <TitleArea title={"Reviews"}/>
            <MainReviewsList />
        </MainReviewsSection>
    )
}

export default ReviewsContainer;
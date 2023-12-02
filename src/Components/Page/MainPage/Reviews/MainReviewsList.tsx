import React, {ReactNode} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { HorizontalCompactList } from "@style/List/HorizontalList";
import { MainReviewsItem } from "@Components/Page/MainPage/Reviews/index";


const NewsList = styled(HorizontalCompactList)`
  width: 100%;
  border: 1px solid ${oc.gray[5]};
  background-color: ${oc.gray[0]};
`

function MainReviewsList() {
    return (
        <NewsList>
            <MainReviewsItem title={"11111111"} text={"2222222222"} date={"2023.10"}/>
            <MainReviewsItem title={"11111111"} text={"2222222222"} date={"2023.10"}/>
            <MainReviewsItem title={"11111111"} text={"2222222222"} date={"2023.10"}/>
            <MainReviewsItem title={"11111111"} text={"2222222222"} date={"2023.10"}/>
        </NewsList>
    )
}

export default MainReviewsList;

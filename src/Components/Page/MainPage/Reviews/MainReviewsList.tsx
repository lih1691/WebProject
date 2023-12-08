import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { HorizontalCompactList } from "@style/List/HorizontalList";
import { FocusFadeInterface, focusOpacityStyle, focusTransitionStyle} from "@style/Interface/Fade";
import { MainReviewsItem } from "@Components/Page/MainPage/Reviews/index";


const ReviewsList = styled(HorizontalCompactList)<FocusFadeInterface>`
  ${focusOpacityStyle};
  width: 100%;
  border: 1px solid ${oc.gray[5]};
  background-color: ${oc.gray[0]};
  transform: translateX(${props => (props.$focus ? 0 :"50px")});
  ${focusTransitionStyle};
`

function MainReviewsList({focus}: {focus: boolean}) {
    return (
        <ReviewsList
            $focus={focus}
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

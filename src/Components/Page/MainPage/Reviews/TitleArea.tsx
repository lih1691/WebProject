import React from 'react';
import styled from 'styled-components';
import { RelativeSectionTitle } from '@style/Pages/SectionTitle';
import { MoreViewLink} from "@Components/Page/MainPage/Reviews";

const Title = styled.p`
  margin-top: 20px;
  font-family: "Oswald";
  font-size: 42px;
  font-weight: 700;
  line-height: 40px;
`

const ReviewTitleArea = styled(RelativeSectionTitle)`
  display: flex;
  justify-content: space-between;
`


function TitleArea({title, focus}: {title: string, focus: boolean}) {
    return (
        <ReviewTitleArea
            $marginTop={"200px"}
            $marginBottom={"50px"}
            $focus={focus}
            $fadeInTransition={"all .5s .3s"}
            $fadeOutTransition={"all .5s"}
        >
            <Title>{title}</Title>
            <MoreViewLink focus={focus} />
        </ReviewTitleArea>
    )
}

export default TitleArea;
import React from 'react';
import styled from 'styled-components'
import oc from 'open-color'
import { ReviewDesc } from '@Components/Page/ReviewPage';
import { Image } from "@style/Base/Image";
import { ReviewListItem } from "@style/List/ContentsList";
import { ContentsImgPositioner, ContentsTextPositioner, ContentsSubjectPosition} from "@style/Base/Positioner";

const TestDiv = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  padding: 10px;
  height: 100%;
  border: 1px solid ${oc.gray[5]};
`

// TODO: 뉴스 정보를 받아와서 props로 전달할 것
function ReviewContents() {
    return (
        <ReviewListItem>
            <TestDiv >
                <ContentsImgPositioner width={"45%"}>
                    <Image src={"/Img/no_image_found.png"} alt={"no image found"}/>
                </ContentsImgPositioner>
                <ContentsTextPositioner width={"55%"}>
                    <ContentsSubjectPosition>
                        Lorem ipsum dolor sit amet.
                    </ContentsSubjectPosition>
                    <ReviewDesc />
                </ContentsTextPositioner>
            </TestDiv>
        </ReviewListItem>
    )
}

export default ReviewContents;
import React from 'react';
import { ReviewContent } from "@Interfaces/Redux/ContentsInterface";
import { ReviewDescription } from '@Components/Page/ReviewPage';
import { Image } from "@style/Base/Image";
import { CustomFontLink } from "@style/Link/NoneDecorationLink";
import { ContentsListItem, ContentsWrapper } from "@style/List/ContentsList";
import { ContentsImgPositioner, ContentsTextPositioner, ContentsSubjectPosition } from "@style/Base/Positioner";

//TODO: 이미지도 받아와서 연결시켜야 함
function ReviewContents({content}: {content: ReviewContent}) {
    const { writer, title, rating, date, product } = content;
    
    return (
        <ContentsListItem width={"50%"}>
            <ContentsWrapper $padding={"10px"}>
                <ContentsImgPositioner width={"45%"}>
                    <Image src={"/Img/no_image_found.png"} alt={"no image found"}/>
                </ContentsImgPositioner>
                <ContentsTextPositioner width={"55%"}>
                    <ContentsSubjectPosition>
                        <CustomFontLink to={"/"} $fontSize={"17px"} $fontWeight={700}>
                            {title}
                        </CustomFontLink>
                    </ContentsSubjectPosition>
                    <ReviewDescription nickname={writer} rating={rating} date={date} product={product} />
                </ContentsTextPositioner>
            </ContentsWrapper>
        </ContentsListItem>
    )
}

export default ReviewContents;
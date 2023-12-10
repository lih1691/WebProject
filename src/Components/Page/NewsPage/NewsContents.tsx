import React from 'react';
import { NewsContent } from "@Interfaces/Redux/ContentsInterface";
import NewsDescription from "@Components/Page/NewsPage/NewsDescription";
import { Image } from '@style/Base/Image';
import { CustomFontLink } from '@style/Link/NoneDecorationLink';
import { ContentsListItem, ContentsWrapper} from "@style/List/ContentsList";
import { ContentsImgPositioner, ContentsTextPositioner, ContentsSubjectPosition } from "@style/Base/Positioner";

function NewsContents({content}: {content:NewsContent}) {
    const { title, date, desc } = content;
    
    return (
        <ContentsListItem width={"100%"}>
            <ContentsWrapper $padding={"20px"}>
                <ContentsImgPositioner width={"30%"}>
                    <Image src={"/Img/no_image_found.png"} alt={"no image found"}/>
                </ContentsImgPositioner>
            </ContentsWrapper>
            <ContentsTextPositioner width={"70%"}>
                <ContentsSubjectPosition>
                    <CustomFontLink to={"/"} $fontSize={"21px"} $fontWeight={700}>
                        {title}
                    </CustomFontLink>
                </ContentsSubjectPosition>
                <NewsDescription date={date} desc={desc} />
            </ContentsTextPositioner>
        </ContentsListItem>
    )
}

export default NewsContents;
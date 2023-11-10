import React from 'react';
import { NewsContent} from "@redux/features/NewsContentSlice";
import NewsDescription from "@Components/Page/NewsPage/NewsDescription";
import { Image } from '@style/Base/Image';
import { TitleLink } from '@style/Link/NoneDecorationLink';
import { ContentsListItem, ContentsWrapper} from "@style/List/ContentsList";
import { ContentsImgPositioner, ContentsTextPositioner, ContentsSubjectPosition } from "@style/Base/Positioner";

function NewsContents({content}: {content:NewsContent}) {
    const { title, date, desc } = content;
    
    return (
        <ContentsListItem width={"100%"}>
            <ContentsWrapper padding={"20px"}>
                <ContentsImgPositioner width={"30%"}>
                    <Image src={"/Img/no_image_found.png"} alt={"no image found"}/>
                </ContentsImgPositioner>
            </ContentsWrapper>
            <ContentsTextPositioner width={"70%"}>
                <ContentsSubjectPosition>
                    <TitleLink to={"/"} $fontsize={"21px"} $fontweight={700}>
                        {title}
                    </TitleLink>
                </ContentsSubjectPosition>
                <NewsDescription date={date} desc={desc} />
            </ContentsTextPositioner>
        </ContentsListItem>
    )
}

export default NewsContents;
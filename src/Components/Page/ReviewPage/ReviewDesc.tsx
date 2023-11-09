import React from 'react';
import { ContentsDescPosition } from "@style/Base/Positioner";
import { DescList, DescTerm, Desc} from "@style/Base/Desc";
import { StarRating } from "@lib/Contents/StarRating";


function ReviewDesc() {
    return (
        <ContentsDescPosition>
            <DescList>
                <DescTerm>별점 : </DescTerm>
                <Desc><StarRating rating={2.5} totalRating={5} /></Desc>
            </DescList>
            <DescList>
                <DescTerm>작성자 : </DescTerm>
                <Desc>홍길동</Desc>
            </DescList>
            <DescList>
                <DescTerm>작성일 : </DescTerm>
                <Desc>2023.11.09</Desc>
            </DescList>
            <DescList>
                <DescTerm>상품명 : </DescTerm>
                <Desc>아이폰 13 미니</Desc>
            </DescList>
        </ContentsDescPosition>
    )
}

export default ReviewDesc;
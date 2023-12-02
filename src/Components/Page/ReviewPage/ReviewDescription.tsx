import React from 'react';
import { RelativePositioner } from "@style/Base/Positioner";
import { DescList, DescTerm, Desc } from "@style/Base/Desc";
import { StarRating } from "@lib/Contents/StarRating";

interface DescProps {
    nickname: string;
    rating: number;
    date: string;
    product: string;
}

function ReviewDescription({nickname, rating, date, product}: DescProps) {
    return (
        <RelativePositioner>
            <DescList>
                <DescTerm>별 점 : </DescTerm>
                <Desc><StarRating rating={rating} totalRating={5} /></Desc>
            </DescList>
            <DescList>
                <DescTerm>작성자 : </DescTerm>
                <Desc>{nickname}</Desc>
            </DescList>
            <DescList>
                <DescTerm>작성일 : </DescTerm>
                <Desc>{date}</Desc>
            </DescList>
            <DescList>
                <DescTerm>상품명 : </DescTerm>
                <Desc>{product}</Desc>
            </DescList>
        </RelativePositioner>
    )
}

export default ReviewDescription;
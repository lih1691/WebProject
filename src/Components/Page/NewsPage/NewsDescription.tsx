import React from 'react';
import { DescProps } from "@Interfaces/Style/Pages/News";
import { RelativePositioner } from "@style/Base/Positioner";
import { DescList, DescTerm, Desc, NewsDesc } from "@style/Base/Desc";

function NewsDescription({date, desc}: DescProps) {
    return (
        <RelativePositioner>
            <DescList>
                <DescTerm>날 짜 :</DescTerm>
                <Desc>{date}</Desc>
            </DescList>
            <NewsDesc>{desc}</NewsDesc>
        </RelativePositioner>
    )
}

export default NewsDescription;
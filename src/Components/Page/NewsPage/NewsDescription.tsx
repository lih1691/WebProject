import React from 'react';
import { RelativePositioner } from "@style/Base/Positioner";
import { DescList, DescTerm, Desc, NewsDesc } from "@style/Base/Desc";

interface DescProps {
    date: string;
    desc: string;
}

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
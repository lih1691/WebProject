import React from 'react';
import styled from 'styled-components';
import { AbsoluteSectionTitle } from "@style/Pages/SectionTitle";

const Title = styled.p`
  font-family: "Oswald";
  font-size: 42px;
  font-weight: 700;
  line-height: 50px;
`

function CategoryTitleArea({title, currentSectionIndex}: {title: string, currentSectionIndex: number}) {
    return (
        <AbsoluteSectionTitle
            $top={"15%"}
            $left={"10%"}
            $focus={currentSectionIndex === 1}
            $fadeInTransition={"all .5s .3s"}
            $fadeOutTransition={"all .5s"}
        >
            <Title>{title}</Title>
        </AbsoluteSectionTitle>
    )
}

export default CategoryTitleArea;
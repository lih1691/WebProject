import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '@style/Pages/SectionTitle';

const Title = styled.p`
  margin-top: 20px;
  font-size: 42px;
  font-weight: 700;
  line-height: 50px;
`

function TitleArea({title, currentSectionIndex}: {title: string, currentSectionIndex: number}) {
    return (
        <SectionTitle
            $marginTop={"200px"}
            $marginBottom={"50px"}
            $focus={currentSectionIndex === 2}
            $fadeInTransition={"all .5s .3s"}
            $fadeOutTransition={"all .5s"}
        >
            <Title>{title}</Title>
        </SectionTitle>
    )
}

export default TitleArea;
import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '@style/Pages/SectionTitle';

const Title = styled.p`
  margin-top: 20px;
  font-size: 42px;
  font-weight: 700;
  line-height: 50px;
`

function TitleArea({title}: {title: string}) {
    return (
        <SectionTitle $marginTop={"200px"} $marginBottom={"50px"}>
            <Title>{title}</Title>
        </SectionTitle>
    )
}

export default TitleArea;
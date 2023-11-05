import React from 'react';
import oc from 'open-color';
import { Section } from '@style/Pages/Section';
import { CategoryLink, CategoryList, CategoryItem } from '@Components/Page/MainPage/Category';
import styled from "styled-components";

const gray = oc.gray[3];
const white = oc.gray[0];

const CategorySection = styled(Section)`
  display: block;
  min-width: 1500px;
`

function CategoryContainer() {
    return (
        <CategorySection className={"article"}>
            <CategoryList>
                <CategoryItem>
                    <CategoryLink title={"애플"} text={"애플은 애플입니다."} background={gray} />
                </CategoryItem>
                <CategoryItem>
                    <CategoryLink title={"삼성"} text={"삼성은 삼성입니다."} background={white} />
                </CategoryItem>
            </CategoryList>
            <CategoryList>
                <CategoryItem>
                    <CategoryLink title={"스마트폰"} text={"스마트폰은 스마트폰입니다."} background={gray} />
                </CategoryItem>
                <CategoryItem>
                    <CategoryLink title={"태블릿"} text={"태블릿은 태블릿입니다."} background={white} />
                </CategoryItem>
                <CategoryItem>
                    <CategoryLink title={"기타"} text={"기타"} background={gray} />
                </CategoryItem>
            </CategoryList>
        </CategorySection>
    )
}

export default CategoryContainer;
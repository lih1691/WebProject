import React from 'react';
import oc from 'open-color';
import { Section } from '@style/Section';
import { CategoryLink, CategoryList, CategoryLi } from '@Components/Page/MainPage/Category';
import styled from "styled-components";

const gray = oc.gray[3];
const white = oc.gray[0];

const CategorySection = styled(Section)`
  overflow: hidden;
  position: relative;
  display: block;
`

function CategoryContainer() {
    return (
        <CategorySection>
            <CategoryList>
                <CategoryLi>
                    <CategoryLink title={"애플"} text={"애플은 애플입니다."} background={gray} />
                </CategoryLi>
                <CategoryLi>
                    <CategoryLink title={"삼성"} text={"삼성은 삼성입니다."} background={white} />
                </CategoryLi>
            </CategoryList>
            <CategoryList>
                <CategoryLi>
                    <CategoryLink title={"스마트폰"} text={"스마트폰은 스마트폰입니다."} background={gray} />
                </CategoryLi>
                <CategoryLi>
                    <CategoryLink title={"태블릿"} text={"태블릿은 태블릿입니다."} background={white} />
                </CategoryLi>
                <CategoryLi>
                    <CategoryLink title={"기타"} text={"기타"} background={gray} />
                </CategoryLi>
            </CategoryList>
        </CategorySection>
    )
}

export default CategoryContainer;
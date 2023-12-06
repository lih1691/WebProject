import React from 'react';
import styled from "styled-components";
import oc from 'open-color';
import { Section } from '@style/Pages/Section';
import { CategoryLink, CategoryList, CategoryItem, CategoryTitleArea } from '@Components/Page/MainPage/Category';
import { CategorySectionLine } from "@style/Base/drawLine";

const CategorySection = styled(Section)`
  min-width: 1500px;
`

const grayCategory = {
    color: oc.gray[3],
    $fadeInTransition: "opacity .4s 1s, transform .4s 1s",
    $fadeOutTransition: "all .5s"
}

const whiteCategory = {
    color: oc.gray[0],
    $fadeInTransition: "opacity 1s .1s, transform 1s .1s",
    $fadeOutTransition: "all .5s"
}

function CategoryContainer({currentSectionIndex}: {currentSectionIndex: number}) {
    return (
        <CategorySection className={"article"}>
            <CategoryTitleArea title={"Categories"} currentSectionIndex={currentSectionIndex}/>
            <CategorySectionLine $height={"50vh"} $focus={currentSectionIndex === 1}/>
            <CategoryList>
                <CategoryItem
                    $focus={currentSectionIndex === 1}
                    $fadeInTransition={grayCategory.$fadeInTransition}
                    $fadeOutTransition={grayCategory.$fadeOutTransition}
                >
                    <CategoryLink 
                        title={"애플"} 
                        text={"애플은 애플입니다."} 
                        src={"/Img/apple.png"}
                        invertedSrc={"/Img/apple_on.png"}
                        alt={"애플 아이콘"}
                        background={grayCategory.color}
                    />
                </CategoryItem>
                <CategoryItem
                    $focus={currentSectionIndex === 1}
                    $fadeInTransition={whiteCategory.$fadeInTransition}
                    $fadeOutTransition={whiteCategory.$fadeOutTransition}
                >
                    <CategoryLink
                        title={"삼성"}
                        text={"삼성은 삼성입니다."}
                        src={"/Img/samsung.png"}
                        invertedSrc={"/Img/samsung_on.png"}
                        alt={"삼성 아이콘"}
                        background={whiteCategory.color}
                    />
                </CategoryItem>
            </CategoryList>
            <CategoryList>
                <CategoryItem
                    $focus={currentSectionIndex === 1}
                    $fadeInTransition={grayCategory.$fadeInTransition}
                    $fadeOutTransition={grayCategory.$fadeOutTransition}
                >
                    <CategoryLink
                        title={"스마트폰"}
                        text={"스마트폰은 스마트폰입니다."}
                        src={"/Img/smartphone.png"}
                        invertedSrc={"/Img/smartphone_on.png"}
                        alt={"애플 아이콘"}
                        background={grayCategory.color}
                    />
                </CategoryItem>
                <CategoryItem
                    $focus={currentSectionIndex === 1}
                    $fadeInTransition={whiteCategory.$fadeInTransition}
                    $fadeOutTransition={whiteCategory.$fadeOutTransition}
                >
                    <CategoryLink
                        title={"태블릿"}
                        text={"태블릿은 태블릿입니다."}
                        src={"/Img/apple.png"}
                        invertedSrc={"/Img/apple_on.png"}
                        alt={"애플 아이콘"}
                        background={whiteCategory.color}
                    />
                </CategoryItem>
                <CategoryItem
                    $focus={currentSectionIndex === 1}
                    $fadeInTransition={grayCategory.$fadeInTransition}
                    $fadeOutTransition={grayCategory.$fadeOutTransition}
                >
                    <CategoryLink
                        title={"기타"}
                        text={"기타"}
                        src={"/Img/apple.png"}
                        invertedSrc={"/Img/apple_on.png"}
                        alt={"애플 아이콘"}
                        background={grayCategory.color}
                    />
                </CategoryItem>
            </CategoryList>
        </CategorySection>
    )
}

export default CategoryContainer;
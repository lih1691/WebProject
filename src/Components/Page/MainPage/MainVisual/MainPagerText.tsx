import React from 'react';
import oc from 'open-color';
import { useAppSelector } from "@redux/hook";
import { PagerUl, PagerLi } from '@style/List/PagerStyle';

const pagerLiStyle = {
    width: "150px",
    color: oc.gray[4],
    clickedColor: oc.gray[8],
    $after: {
        top: "50%",
        left: "170px",
        activatedLength: "60px",
        deactivatedLength: "30px",
    }
};

function MainPagerText({ handleClick } : { handleClick: (index: number) => void}) {
    const Index = useAppSelector((state) => state.ui.mainVisual.currentIndex);
    
    return (
        <PagerUl $leftPosition={"50%"} $topPosition={"75vh"} $marginLeft={"-520px"} $zIndex={0} display={"block"}>
            <PagerLi
                width={pagerLiStyle.width}
                color={pagerLiStyle.color}
                $clickedColor={pagerLiStyle.clickedColor}
                $active={Index === 0}
                onClick={() => handleClick(0)}
                $after={pagerLiStyle.$after}
            >
                아이폰
            </PagerLi>
            <PagerLi
                width={pagerLiStyle.width}
                color={pagerLiStyle.color}
                $clickedColor={pagerLiStyle.clickedColor}
                $active={Index === 1}
                onClick={() => handleClick(1)}
                $after={pagerLiStyle.$after}
            >
                갤럭시
            </PagerLi>
            <PagerLi
                width={pagerLiStyle.width}
                color={pagerLiStyle.color}
                $clickedColor={pagerLiStyle.clickedColor}
                $active={Index === 2}
                onClick={() => handleClick(2)}
                $after={pagerLiStyle.$after}
            >
                샤오미
            </PagerLi>
        </PagerUl>
    )
}

export default MainPagerText;
import React from 'react';
import oc from "open-color";
import { useAppSelector } from "@redux/hook";
import { PagerUl, PagerLi } from '@style/List/PagerStyle';

const pagerLiStyle = {
    width: "30px",
    color: oc.gray[8],
    clickedColor: oc.gray[4],
    $after: {
        top: "90%",
        left: "35%",
        height: "2px",
        activatedLength: "20px",
        deactivatedLength: "0px",
    }
};


function MainPager({handleClick} : { handleClick: (index: number) => void}) {
    const Index = useAppSelector((state) => state.ui.mainPageState.mainVisual.currentIndex);
    
    return (
        <PagerUl $leftPosition={"50%"} $topPosition={"230px"} $marginLeft={"-795px"} $zIndex={1} display={"flex"}>
            <PagerLi
                width={pagerLiStyle.width}
                color={pagerLiStyle.color}
                $clickedColor={pagerLiStyle.clickedColor}
                $active={false}
                $focus={Index === 0}
                onClick={() => handleClick(0)}
                $after={pagerLiStyle.$after}
            >
                01
            </PagerLi>
            <PagerLi
                width={pagerLiStyle.width}
                color={pagerLiStyle.color}
                $clickedColor={pagerLiStyle.clickedColor}
                $focus={Index === 1}
                $active={false}
                onClick={() => handleClick(1)}
                $after={pagerLiStyle.$after}
            >
                02
            </PagerLi>
            <PagerLi
                width={pagerLiStyle.width}
                color={pagerLiStyle.color}
                $clickedColor={pagerLiStyle.clickedColor}
                $focus={Index === 2}
                $active={false}
                onClick={() => handleClick(2)}
                $after={pagerLiStyle.$after}
            >
                03
            </PagerLi>
        </PagerUl>
    )
}

export default MainPager;
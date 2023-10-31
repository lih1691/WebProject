import React from 'react';
import oc from "open-color";
import { useAppSelector } from "@redux/hook";
import { PagerUl, PagerLi } from '@style/PagerStyle';

const pagerLiStyle = {
    widthLength: "30px",
    color: oc.gray[8],
    ClickedColor: oc.gray[4],
    $after: {
        topPosition: "100%",
        leftPosition: "35%",
        activatedLength: "25px",
        deactivatedLength: "0px",
    }
};


function MainPager({handleClick} : { handleClick: (index: number) => void}) {
    const Index = useAppSelector((state) => state.ui.mainVisual.currentIndex);
    
    return (
        <PagerUl $leftPosition={"50%"} $topPosition={"230px"} $marginLeft={"-795px"} $zIndex={1} display={"flex"}>
            <PagerLi
                $widthLength={pagerLiStyle.widthLength}
                color={pagerLiStyle.color}
                $ClickedColor={pagerLiStyle.ClickedColor}
                $active={Index === 0}
                onClick={() => handleClick(0)}
                $after={pagerLiStyle.$after}
            >
                01
            </PagerLi>
            <PagerLi
                $widthLength={pagerLiStyle.widthLength}
                color={pagerLiStyle.color}
                $ClickedColor={pagerLiStyle.ClickedColor}
                $active={Index === 1}
                onClick={() => handleClick(1)}
                $after={pagerLiStyle.$after}
            >
                02
            </PagerLi>
            <PagerLi
                $widthLength={pagerLiStyle.widthLength}
                color={pagerLiStyle.color}
                $ClickedColor={pagerLiStyle.ClickedColor}
                $active={Index === 2}
                onClick={() => handleClick(2)}
                $after={pagerLiStyle.$after}
            >
                03
            </PagerLi>
        </PagerUl>
    )
}

export default MainPager;
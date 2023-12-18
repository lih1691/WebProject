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
                $active={Index === 0}
                $focus={true}
                $transition={"all .2s"}
                $after={pagerLiStyle.$after}
                onClick={() => handleClick(0)}
            >
                01
            </PagerLi>
            <PagerLi
                width={pagerLiStyle.width}
                color={pagerLiStyle.color}
                $clickedColor={pagerLiStyle.clickedColor}
                $focus={true}
                $active={Index === 1}
                $transition={"all .2s"}
                $after={pagerLiStyle.$after}
                onClick={() => handleClick(1)}
            >
                02
            </PagerLi>
            <PagerLi
                width={pagerLiStyle.width}
                color={pagerLiStyle.color}
                $clickedColor={pagerLiStyle.clickedColor}
                $focus={true}
                $active={Index === 2}
                $transition={"all .2s"}
                $after={pagerLiStyle.$after}
                onClick={() => handleClick(2)}
            >
                03
            </PagerLi>
        </PagerUl>
    )
}

export default MainPager;
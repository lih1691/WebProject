import React from 'react';
import oc from 'open-color';
import { useAppSelector } from "@redux/hook";
import { PagerUl, PagerLi } from '@style/List/PagerStyle';

const pagerLiStyle = {
    width: "150px",
    color: oc.gray[4],
    clickedColor: oc.gray[8],
    $after: {
        $top: "50%",
        $left: "170px",
        height: "1px",
        $activatedLength: "60px",
        $deactivatedLength: "30px",
    }
};

function MainPagerText({ focus, handleClick } : { focus: boolean, handleClick: (index: number) => void}) {
    const Index = useAppSelector((state) => state.ui.mainPageState.mainVisual.currentIndex);
    
    return (
        <PagerUl
            display={"block"}
            $left={"50%"}
            $top={"75vh"}
            $marginLeft={"-520px"}
            $zIndex={0}
        >
            <PagerLi
                width={pagerLiStyle.width}
                color={pagerLiStyle.color}
                $clickedColor={pagerLiStyle.clickedColor}
                $active={Index === 0}
                $focus={focus}
                $transition={"opacity .6s .4s, left .6s .4s"}
                $after={pagerLiStyle.$after}
                onClick={() => handleClick(0)}
            >
                아이폰
            </PagerLi>
            <PagerLi
                width={pagerLiStyle.width}
                color={pagerLiStyle.color}
                $clickedColor={pagerLiStyle.clickedColor}
                $active={Index === 1}
                $focus={focus}
                $transition={"opacity .6s .5s, left .6s .5s"}
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
                $focus={focus}
                $transition={"opacity .6s .6s, left .6s .6s"}
                onClick={() => handleClick(2)}
                $after={pagerLiStyle.$after}
            >
                샤오미
            </PagerLi>
        </PagerUl>
    )
}

export default MainPagerText;
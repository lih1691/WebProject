import React from 'react';
import oc from 'open-color';
import { useAppSelector } from "@redux/hook";
import { PagerUl, PagerLi } from '@style/PagerStyle';

const pagerLiStyle = {
    widthLength: "150px",
    color: oc.gray[4],
    ClickedColor: oc.gray[8],
    $after: {
        topPosition: "50%",
        leftPosition: "170px",
        activatedLength: "60px",
        deactivatedLength: "30px",
    }
};

function MainPagerText({ handleClick } : { handleClick: (index: number) => void}) {
    const Index = useAppSelector((state) => state.ui.currentIndex);
    
    return (
        <PagerUl $leftPosition={"50%"} $topPosition={"75vh"} $marginLeft={"-520px"} $zIndex={0} display={"block"}>
            <PagerLi
                $widthLength={pagerLiStyle.widthLength}
                color={pagerLiStyle.color}
                $ClickedColor={pagerLiStyle.ClickedColor}
                $active={Index === 0}
                onClick={() => handleClick(0)}
                $after={pagerLiStyle.$after}
            >
                아이폰
            </PagerLi>
            <PagerLi
                $widthLength={pagerLiStyle.widthLength}
                color={pagerLiStyle.color}
                $ClickedColor={pagerLiStyle.ClickedColor}
                $active={Index === 1}
                onClick={() => handleClick(1)}
                $after={pagerLiStyle.$after}
            >
                갤럭시
            </PagerLi>
            <PagerLi
                $widthLength={pagerLiStyle.widthLength}
                color={pagerLiStyle.color}
                $ClickedColor={pagerLiStyle.ClickedColor}
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
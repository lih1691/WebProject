import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { useAppDispatch } from "@redux/hook";
import { changeMainVisualIndex } from '@redux/features/UISlice';
import MainPagerText from './MainPagerText';
import MainPager from "@Components/Page/MainPage/MainVisual/MainPager";

const Positioner = styled.div`
  position: relative;
  width: 1600px;
  margin: 0 auto;
  z-index: 0;
  
  &::before {
    content: "";
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 100vh;
    z-index: 0;
    margin-left: -320px;
    background-color: ${oc.gray[6]};
  }
`

function MainPagerWrapper() {
    const dispatch = useAppDispatch();
    
    const handleLiClick = (index: number) => {
        dispatch(changeMainVisualIndex(index));
    }
    
    return (
        <Positioner>
            <MainPager handleClick={handleLiClick} />
            <MainPagerText handleClick={handleLiClick} />
        </Positioner>
    )
}

export default MainPagerWrapper;
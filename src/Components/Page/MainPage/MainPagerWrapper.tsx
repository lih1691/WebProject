import React, {useState} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import MainPagerText from './MainPagerText';

const Positioner = styled.div`
  position: relative;
  width: 1600px;
  margin: 0 auto;

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
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    
    const handleClick = (index: number) => {
        setActiveIndex(index);
    }
    
    return (
        <Positioner>
            <MainPagerText activeIndex={activeIndex} handleClick={handleClick} />
        </Positioner>
    )
}

export default MainPagerWrapper;
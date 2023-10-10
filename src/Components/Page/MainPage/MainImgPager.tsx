import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const PagerUl = styled.ul`
  position: absolute;
  left: 50%;
  top: 75vh;
  margin-left: -370px;
  text-align: right;
  list-style: none;
  padding: 0;
`

const PagerLi = styled.li`
  position: relative;
  width: 150px;
  color: ${oc.gray[8]};
  line-height: 40px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px; /* 줄의 높이 */
    background-color: #000; /* 줄의 색상 */
  }

`

function MainImgPager() {
    return (
        <PagerUl>
            <PagerLi>아이폰</PagerLi>
            <PagerLi>갤럭시</PagerLi>
            <PagerLi>샤오미</PagerLi>
        </PagerUl>
    )
}

export default MainImgPager;
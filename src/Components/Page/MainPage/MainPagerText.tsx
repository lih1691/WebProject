import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const liColor = oc.gray[8];
const liColorClicked = oc.gray[4];

const PagerUl = styled.ul`
  position: absolute;
  left: 50%;
  top: 75vh;
  margin-left: -520px;
  text-align: right;
  list-style: none;
  padding: 0;
`

const PagerLi = styled.li<{active: boolean}>`
  position: relative;
  width: 150px;
  color: ${(props) => (props.active ? liColor : liColorClicked)};
  line-height: 40px;
  
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 170px;
    width: ${(props) => (props.active ? '60px' : '30px')};;
    height: 1px; /* 줄의 높이 */
    background-color: ${(props) => (props.active ? liColor : liColorClicked)};; /* 줄의 색상 */
    transition: all .6s;
  }
  
  &:hover {
    cursor: pointer;
  }
`

// todo : 리덕스 툴킷 활용
function MainPagerText({activeIndex, handleClick} : {activeIndex: number | null, handleClick: (index: number) => void}) {
    return (
        <PagerUl>
            <PagerLi active={activeIndex === 0} onClick={() => handleClick(0)}>아이폰</PagerLi>
            <PagerLi active={activeIndex === 1} onClick={() => handleClick(1)}>갤럭시</PagerLi>
            <PagerLi active={activeIndex === 2} onClick={() => handleClick(2)}>샤오미</PagerLi>
        </PagerUl>
    )
}

export default MainPagerText;
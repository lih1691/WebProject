import styled from 'styled-components';
import { MainPagerUlProps, MainPagerLiProps } from '@Interfaces/Style/Pages/MainPage';
import { focusOpacityStyle } from "@style/CSS/FadeCSS";

export const PagerUl = styled.ul<MainPagerUlProps>`
  display: ${(props) => props.display};
  position: absolute;
  left: ${(props) => props.$left};
  top: ${(props) => props.$top};
  margin-left: ${(props) => props.$marginLeft};
  text-align: right;
  list-style: none;
  padding: 0;
  z-index: ${(props) => props.$zIndex};
`

export const PagerLi = styled.li<MainPagerLiProps>`
  position: relative;
  ${focusOpacityStyle};
  width: ${(props) => props.width};
  left: ${(props) => props.$focus ? 0 : "20%"};
  color: ${(props) =>
          (props.$active ? props.$clickedColor : props.color)};
  line-height: 40px;
  font-weight: 700;
  transition: ${(props) => props.$transition};
  
  &::after {
    content: "";
    position: absolute;
    top: ${(props) => props.$after.$top};
    left: ${(props) => props.$after.$left};;
    width: ${(props) =>
            (props.$active ? props.$after.$activatedLength
                            : props.$after.$deactivatedLength)};;
    height: ${(props) => props.$after.height};
    background-color: ${(props) => (props.$focus ? props.$clickedColor : props.color)};;
    transition: all .6s;
  }
  
  &:hover {
    cursor: pointer;
  }
`
import styled from 'styled-components';
import { HorizontalItem } from "@style/List/HorizontalList";
import { FocusFadeProps } from "@Interfaces/Style/FadeStyleInterface";
import { focusTransitionStyle } from "@style/CSS/FadeCSS";

const CategoryItem = styled(HorizontalItem)<FocusFadeProps>`
  position: relative;
  opacity: ${(props) => props.$focus ? 1 : 0};
  height: 100%;
  transform: translateX(${props => (props.$focus ? 0 :"-50px")});
  ${focusTransitionStyle};
`

export default CategoryItem;
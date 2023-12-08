import styled from 'styled-components';
import { HorizontalItem } from "@style/List/HorizontalList";
import { FocusFadeInterface } from "@style/Interface/Fade";

const CategoryItem = styled(HorizontalItem)<FocusFadeInterface>`
  position: relative;
  opacity: ${(props) => props.$focus ? 1 : 0};
  height: 100%;
  transform: translateX(${props => (props.$focus ? 0 :"-50px")});
  transition: ${props => (props.$focus ? props.$fadeInTransition : props.$fadeOutTransition)};
`

export default CategoryItem;
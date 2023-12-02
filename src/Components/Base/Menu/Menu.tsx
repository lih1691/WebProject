import styled from 'styled-components';
import oc from 'open-color';
import { NoneDecorationLink } from "@style/Link/NoneDecorationLink";

const black = oc.gray[9];
const white = oc.gray[0];

const Menu = styled(NoneDecorationLink)<{$mainPageIndex: number, $currentPage: string}>`
  font-weight: 400;
  color: ${(props) => (props.$mainPageIndex === 0) || (props.$currentPage !== "MainPage") ? white : black};
  padding: 0.5rem 0.5rem 0.4rem;
  font-size: 18px;
  font-family: 'Oswald';
  transition: all .5s;
  
  &:hover {
    color: ${black};
  }
`

export default Menu;
import styled from 'styled-components';
import oc from 'open-color';
import { NonDecorationLink } from "@Components/Base/Link";

const black = oc.gray[9];
const white = oc.gray[0];

const Menu = styled(NonDecorationLink)<{$pageIndex: number}>`
  font-weight: 400;
  color: ${(props) => props.$pageIndex === 0 ? white : black};
  padding: 0.5rem 0.5rem 0.4rem;
  font-size: 18px;

  &:hover {
    color: ${black};
  }
`

export default Menu;
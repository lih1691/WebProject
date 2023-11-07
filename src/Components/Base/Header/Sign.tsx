import styled from 'styled-components';
import oc from 'open-color';
import { NoneDecorationLink } from '@style/Link/NoneDecorationLink';

const Sign = styled(NoneDecorationLink)<{$pageName: string}>`
  color: ${(props) => props.$pageName === "MainPage" ? oc.gray[9] : oc.gray[0]};
  padding: 0.5rem 0.5rem 0.4rem;
  font-family: 'Oswald';
  transition: .2s all;

  &:hover {
    color: ${oc.gray[5]};
  }
`

export default Sign;
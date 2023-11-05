import styled from 'styled-components';
import oc from 'open-color';

const black = oc.gray[9];
const white = oc.gray[0];

export const Dot = styled.li<{$index: number, $currentIndex: number}>`
  width: 10px;
  height: 10px;
  margin: 22px 0;
  border: 1px solid ${black};
  background-color: ${(props) => props.$index === props.$currentIndex ? black : white};
  transition: all .2s;
`


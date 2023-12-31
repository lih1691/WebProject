import styled from 'styled-components';
import oc from 'open-color';

const baseColor = oc.gray[9];
const hoveredColor = oc.gray[0];

export const CategoryTitle = styled.p<{$isHovered: boolean}>`
  position: relative;
  font-size: 17px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  color: ${(props) => props.$isHovered? hoveredColor : baseColor};
  bottom: ${(props) => props.$isHovered ? "40px" : 0};
  transition: all .4s;
`

export default CategoryTitle;
import styled from 'styled-components';
import oc from 'open-color';
import {LengthProps} from "@Interfaces/Style/BaseStyleInterface";
import {FocusProps} from "@Interfaces/Style/ComponentStateInterface";

interface CategoryLineInterface extends LengthProps, FocusProps {}

const VerticalLine = styled.div<LengthProps>`
  position: absolute;
  opacity: 0.5;
  width: 1px;
  height: ${props => props.height};
`

export const CategorySectionLine = styled(VerticalLine)<CategoryLineInterface>`
  left: 50%;
  margin-left: -320px;
  height: ${props => (props.$focus ? props.height : 0)};
  background-color: ${oc.gray[5]};
  transition: height .4s .4s;
`

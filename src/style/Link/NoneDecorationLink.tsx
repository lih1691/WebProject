import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from "open-color";


export const NoneDecorationLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${oc.gray[9]};
`

export const CustomFontLink = styled(NoneDecorationLink)<{$font?: string, $fontsize?: string, $fontweight?: number}>`
  font-family: ${props => props.$font};
  font-size: ${(props) => props.$fontsize};
  font-weight: ${(props) => props.$fontweight};
`
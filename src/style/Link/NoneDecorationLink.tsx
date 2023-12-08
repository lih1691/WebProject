import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from "open-color";

export interface CustomFontInterface {
    $font?: string;
    $fontSize?: string;
    $fontWeight?: number;
}

export const NoneDecorationLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${oc.gray[9]};
`

export const CustomFontLink = styled(NoneDecorationLink)<CustomFontInterface>`
  font-family: ${props => props.$font};
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
`
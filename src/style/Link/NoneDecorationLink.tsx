import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from "open-color";
import {CustomFontProps} from "@Interfaces/Style/Font";

export const NoneDecorationLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${oc.gray[9]};
`
export const CustomFontLink = styled(NoneDecorationLink)<CustomFontProps>`
  font-family: ${props => props.$font};
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
`
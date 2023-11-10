import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from "open-color";

export const NoneDecorationLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`

export const TitleLink = styled(NoneDecorationLink)<{$fontsize: string, $fontweight: number}>`
  font-size: ${(props) => props.$fontsize};
  font-weight: ${(props) => props.$fontweight};
  color: ${oc.gray[9]};
`
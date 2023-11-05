import styled from 'styled-components';
import { NoneDecorationLink } from "@style/Link/NoneDecorationLink";

export const HoverCheckLink = styled(NoneDecorationLink)<{$isHovered: boolean}>`
  display: block;
  height: 100%;
`
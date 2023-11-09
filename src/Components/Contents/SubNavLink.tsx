import styled from 'styled-components';
import oc from 'open-color';
import { HoverCheckLink } from "@style/Link/HoverCheckLink";

export const SubNavLink = styled(HoverCheckLink)`
  font-size: 17px;
  position: relative;
  padding: 0 25px;
  line-height: 70px;
  font-weight: 700;
  color: ${oc.gray[4]};
  
  &:hover {
    color: ${oc.gray[9]};
  }
`
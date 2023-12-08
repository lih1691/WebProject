import styled from 'styled-components';
import oc from 'open-color';
import { FocusFadeInterface } from "@style/Interface/Fade";

interface SectionTitleInterface extends FocusFadeInterface{
  $marginTop?: string;
  $marginLeft?: string;
  $marginBottom?: string;
}

interface AbsoluteSectionTitleInterface extends SectionTitleInterface {
  $top?: string;
  $left?: string;
  $bottom?: string;
  $right?: string;
}

const SectionTitle = styled.div<SectionTitleInterface>`
  opacity: ${props => (props.$focus ? 1: 0)};
  margin-top: ${(props) => props.$marginTop};
  margin-bottom: ${(props) => props.$marginBottom};
  color: ${oc.gray[9]};
  transform: translateX(${props => (props.$focus ? 0 :"30px")});
  transition: ${props => (props.$focus ? props.$fadeInTransition : props.$fadeOutTransition)};
`

export const RelativeSectionTitle = styled(SectionTitle)`
  position: relative;
`

export const AbsoluteSectionTitle = styled(SectionTitle)<AbsoluteSectionTitleInterface>`
  position: absolute;
  top: ${props => props.$top};
  left: ${props => props.$left};
  bottom: ${props => props.$bottom};
  right: ${props => props.$right};
`
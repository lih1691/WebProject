import styled from 'styled-components';
import oc from 'open-color';
import { FocusFadeProps } from "@Interfaces/Style/FadeStyleInterface";
import { PositionProps, MarginProps } from "@Interfaces/Style/BaseStyleInterface";

interface SectionTitleProps extends MarginProps, FocusFadeProps {}

const SectionTitle = styled.div<SectionTitleProps>`
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

export const AbsoluteSectionTitle = styled(SectionTitle)<PositionProps & SectionTitleProps>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
`
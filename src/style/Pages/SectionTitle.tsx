import styled from 'styled-components';
import oc from 'open-color';

interface SectionTitleInterface {
  $marginTop: string;
  $marginBottom: string;
  $focus: boolean;
  $fadeInTransition: string;
  $fadeOutTransition: string;
}

export const SectionTitle = styled.div<SectionTitleInterface>`
  position: relative;
  opacity: ${props => (props.$focus ? 1: 0)};
  margin-top: ${(props) => props.$marginTop};
  margin-bottom: ${(props) => props.$marginBottom};
  color: ${oc.gray[9]};
  transform: translateX(${props => (props.$focus ? 0 :"30px")});
  transition: ${props => (props.$focus ? props.$fadeInTransition : props.$fadeOutTransition)};
`
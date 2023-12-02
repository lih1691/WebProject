import styled from 'styled-components';
import oc from 'open-color';

export const SectionTitle = styled.div<{$marginTop: string, $marginBottom: string}>`
  position: relative;
  margin-top: ${(props) => props.$marginTop};
  margin-bottom: ${(props) => props.$marginBottom};
  color: ${oc.gray[9]};
`
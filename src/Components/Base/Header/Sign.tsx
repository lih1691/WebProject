import styled from 'styled-components';
import oc from 'open-color';
import { NoneDecorationLink } from '@style/Link/NoneDecorationLink';

const Sign = styled(NoneDecorationLink)`
  font-family: 'Oswald';
  color: ${oc.gray[8]};
  padding: 0.5rem 0.5rem 0.4rem;
  transition: .2s all;

  &:hover {
    color: ${oc.gray[5]};
  }
`

export default Sign;
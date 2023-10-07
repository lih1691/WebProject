import styled from 'styled-components';
import oc from 'open-color';
import { NonDecorationLink } from '@Components/Base/Link';

const Sign = styled(NonDecorationLink)`
  font-weight: 300;
  color: ${oc.gray[8]};
  padding: 0.5rem 0.5rem 0.4rem;

  &:hover {
    color: ${oc.gray[5]};
  }
`

export default Sign;
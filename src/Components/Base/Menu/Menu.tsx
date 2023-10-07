import styled from 'styled-components';
import oc from 'open-color';
import { NonDecorationLink} from "@Components/Base/Link";

const Menu = styled(NonDecorationLink)`
  font-weight: 400;
  color: ${oc.gray[0]};
  padding: 0.5rem 0.5rem 0.4rem;
  font-size: 18px;

  &:hover {
    color: ${oc.gray[9]};
  }
`

export default Menu;
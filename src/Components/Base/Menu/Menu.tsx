import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';


const Menu = styled(Link)`
  font-weight: 400;
  color: ${oc.gray[0]};
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  text-decoration: none;
  transition: .2s all;
  text-decoration: none;
  
  &:hover {
    color: ${oc.gray[8]};
  }
`

export default Menu;
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';

const MenuLink = styled(Link)`
  font-weight: 400;
  color: ${oc.gray[9]};
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  text-decoration: none;
  transition: .2s all;
`

export default MenuLink;
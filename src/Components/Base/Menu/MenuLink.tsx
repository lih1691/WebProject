import React from 'react';
import Menu from './Menu';
import {MenuLinkProps} from "@Interfaces/Style/Link";


function MenuLink({to, children}: MenuLinkProps) {
    return (
        <Menu to={to}>{children}</Menu>
    )
}

export default MenuLink;
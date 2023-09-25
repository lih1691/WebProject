import React, {ReactNode} from 'react';
import Menu from './Menu';

interface MenuLinkProps {
    to: string;
    children: ReactNode;
}

function MenuLink({to, children}: MenuLinkProps) {
    return (
        <Menu to={to}>{children}</Menu>
    )
}

export default MenuLink;
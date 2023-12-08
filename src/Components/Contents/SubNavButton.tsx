import React, {ReactNode} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Button } from "@style/Base/Button";
import {useAppDispatch, useAppSelector} from "@redux/hook";
import {setCategory} from "@redux/features/UISlice";

const NavButton = styled(Button)<{$active: boolean}>`
  font-size: 17px;
  position: relative;
  padding: 0 25px;
  line-height: 70px;
  font-weight: 700;
  color: ${props => (props.$active ? oc.gray[9] : oc.gray[4])};
  transition: all .3s;
  
  &:hover {
    color: ${oc.gray[9]};
  }
`

function SubNavButton({children, category}: {children: ReactNode, category: string}) {
    const dispatch = useAppDispatch();
    const currentCategory = useAppSelector((state) => state.ui.contentCategory);
    
    const handleCategory = (category: string) => {
        dispatch(setCategory(category));
    };
    
    return (
        <NavButton
            onClick={() => handleCategory(category)}
            $active={currentCategory === category}
        >
            {children}
        </NavButton>
    )
}

export default SubNavButton;
import React, {ReactNode} from 'react';
import {useNavigate} from "react-router-dom";
import styled from 'styled-components';
import oc from 'open-color';
import { Button } from "@style/Base/Button";
import {useAppDispatch, useAppSelector} from "@redux/hook";
import {selectCurrentCategory, selectCurrentContentsType, setCategory} from "@redux/features/UISlice";

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

function SubNavButton({children, buttonCategory}: {children: ReactNode, buttonCategory: string}) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const contentsType = useAppSelector(selectCurrentContentsType);
    const category = useAppSelector(selectCurrentCategory);
    
    const handleCategory = (category: string) => {
        dispatch(setCategory(category));
        navigate(`/contents/${contentsType}/${category}`);
    };
    
    return (
        <NavButton
            onClick={() => handleCategory(buttonCategory)}
            $active={category === buttonCategory}
        >
            {children}
        </NavButton>
    )
}

export default SubNavButton;
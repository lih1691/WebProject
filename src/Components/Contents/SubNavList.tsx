import React from 'react';
import styled from 'styled-components';
import { useAppDispatch} from "@redux/hook";
import { setCategory } from "@redux/features/UISlice";
import { HorizontalItem, HorizontalList } from "@style/List/HorizontalList";
import { SubNavButton } from "@Components/Contents";


const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 1100px;
  margin: 0 auto;
  height: 70px;
  display: flex;
  align-items: center; /
  justify-content: center;
`
const NavList = styled(HorizontalList)`
  overflow: hidden;
  margin: 0 auto;
  height: inherit;
`

function SubNavList() {
    const dispatch = useAppDispatch();

    const handleCategory = (category: string) => {
        dispatch(setCategory(category));
    };
    
    return(
        <Wrapper>
            <NavList>
                <HorizontalItem>
                    <SubNavButton category={"apple"}>애플</SubNavButton>
                </HorizontalItem>
                <HorizontalItem>
                    <SubNavButton category={"samsung"}>삼성</SubNavButton>
                </HorizontalItem>
                <HorizontalItem>
                    <SubNavButton category={"xiaomi"}>샤오미</SubNavButton>
                </HorizontalItem>
            </NavList>
        </Wrapper>
    )
}

export default SubNavList;
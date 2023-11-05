import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import {HorizontalCompactList, HorizontalItem} from "@style/List/HorizontalList";
import { NoneDecorationLink } from "@style/Link/NoneDecorationLink";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 1100px;
  margin: 0 auto;
`

const TestLink = styled(NoneDecorationLink)`
  position: relative;
`

function SubNavList() {
    return(
        <Wrapper>
            <HorizontalCompactList>
                <HorizontalItem>
                    <TestLink>애플</TestLink>
                </HorizontalItem>
            </HorizontalCompactList>
        </Wrapper>
    )
}

export default SubNavList;
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { SubBannerImg} from "@style/Base/Image";
import { SubBannerBackground } from "@style/Base/Background";

const Positioner = styled.div`
  position: relative;
  width: 100%;
  min-width: 1400px;
  height: 510px;
  color: ${oc.gray[0]};
  z-index: 3;
`

function SubBanner() {
    return (
        <Positioner>
            <SubBannerImg></SubBannerImg>
        </Positioner>
    )
}

export default SubBanner;

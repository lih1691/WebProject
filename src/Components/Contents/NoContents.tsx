import React from 'react';
import {NoContentsBackground, NoContentsText} from "@style/Base/PageContents";

function NoContents() {
    return (
        <NoContentsBackground>
            <NoContentsText>
                No contents available.
            </NoContentsText>
        </NoContentsBackground>
    )
}

export default NoContents;
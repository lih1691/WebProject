import React from 'react';
import {NoContentsBackground, NoContentsText} from "@style/Base/PageContents";

function NoContents({left}: {left: string}) {
    return (
        <NoContentsBackground>
            <NoContentsText $left={left}>
                No contents available.
            </NoContentsText>
        </NoContentsBackground>
    )
}

export default NoContents;
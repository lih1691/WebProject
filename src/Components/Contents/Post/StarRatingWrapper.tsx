import React from 'react';
import styled from "styled-components";
import { StarRating } from "@lib/Contents/StarRating";

const Wrapper = styled.div`
  margin-left: 1rem;
`

function StarRatingWrapper() {
    const handleRating = (event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, target } = event;
        const rect = (target as HTMLDivElement).getBoundingClientRect();
        
        const width = rect.width;
        const relativeX = clientX - rect.left;
        const newRating = (relativeX / width);
        
        console.log(width);
    }
    
    return (
        <Wrapper onClick={handleRating}>
            <StarRating rating={5} fontSize={"2.5rem"}/>
        </Wrapper>
    )
}

export default StarRatingWrapper;
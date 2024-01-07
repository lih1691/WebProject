import React from 'react';
import styled from "styled-components";
import {useInputChange} from "@lib/Hooks/useChange";
import RatingStar from "@Components/Contents/Post/RatingStar";
import {InputChangeInterface} from "@Interfaces/Hooks/ChangeInterface";

const Wrapper = styled.fieldset`
  border: none;
  margin-left: 1rem;
  padding: 0;
  
  input[type="radio"] {
    display: none;
  }
  
  div {
    display: inline;
    cursor: pointer;
  }
`

function StarRatingWrapper({determinedRating}: {determinedRating: InputChangeInterface<number>}) {
    const currentRating = useInputChange(0);
    const totalRating = 5;
    
    const handleMouseLeave = () => {
        currentRating.setValue(0);
    }
    
    return (
        <Wrapper
            onMouseLeave={handleMouseLeave}
            onClick={() => {determinedRating.setValue(currentRating.value)}}
        >
            {[...Array(totalRating)].map((_, index) => {
                const rating = index;
                
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            value={rating}
                        />
                        <RatingStar value={rating} currentRating={currentRating} determinedRating={determinedRating}/>
                    </label>
                );
            })}
        </Wrapper>
    )
}

export default StarRatingWrapper;
import React from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";
import oc from 'open-color';
import { RelativePositioner } from "@style/Base/Positioner";
import { StarRatingProps } from "@Interfaces/Hooks/StarRatingInterface";

function DescriptionStarRating ({rating, fontSize = "1rem"} : StarRatingProps) {
    const filledStars = Math.floor(rating);
    const totalRating = 5;
    const halfStars = rating - filledStars === 0.5;
    
    const stars = Array.from({ length: totalRating }, (_, index) => {
        
        if (index < filledStars) {
            return <FaStar key={index} color={oc.yellow[4]} fontSize={fontSize} />;
        } else if (halfStars && index === filledStars) {
            return <FaStarHalf key={index} color={oc.yellow[4]} fontSize={fontSize} />;
        } else {
            return <FaStar key={index} color={oc.gray[6]} fontSize={fontSize} />;
        }
    })
    
    return (
        <RelativePositioner
        >
            {stars}
        </RelativePositioner>
    )
}

export default DescriptionStarRating;
import React from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";
import oc from 'open-color';
import { RelativePositioner } from "@style/Base/Positioner";

export const StarRating = ({ rating, totalRating = 5}: {rating: number, totalRating: number}) => {
    const filledStars = Math.floor(rating);
    const halfStars = rating - filledStars === 0.5;
    
    const stars = Array.from({ length: totalRating }, (_, index) => {
        if (index < filledStars) {
            return <FaStar key={index} color={oc.yellow[4]} />;
        } else if (halfStars && index === filledStars) {
            return <FaStarHalf key={index} color={oc.yellow[4]}/>;
        } else {
            return <FaStar key={index} color={oc.gray[6]} />;
        }
    })
    
    return <RelativePositioner>{stars}</RelativePositioner>;
}
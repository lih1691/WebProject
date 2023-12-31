import React from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";
import oc from 'open-color';
import { RelativePositioner } from "@style/Base/Positioner";

export const StarRating = ({ rating, totalRating = 5, fontSize = "1rem"}: {rating: number, totalRating?: number, fontSize?: string}) => {
    const filledStars = Math.floor(rating);
    const halfStars = rating - filledStars === 0.5;
    
    const stars = Array.from({ length: totalRating }, (_, index) => {
        if (index < filledStars) {
            return <FaStar key={index} color={oc.yellow[4]} fontSize={fontSize}/>;
        } else if (halfStars && index === filledStars) {
            return <FaStarHalf key={index} color={oc.yellow[4]} fontSize={fontSize}/>;
        } else {
            return <FaStar key={index} color={oc.gray[6]} fontSize={fontSize}/>;
        }
    })
    
    return <RelativePositioner>{stars}</RelativePositioner>;
}
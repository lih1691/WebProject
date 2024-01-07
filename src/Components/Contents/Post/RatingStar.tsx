import React, {useEffect, useMemo, useRef, useState} from 'react';
import { FaStar, FaStarHalfStroke} from "react-icons/fa6";
import oc from "open-color";
import { InputChangeInterface } from "@Interfaces/Hooks/ChangeInterface";

function Star({isFilled, color}: { isFilled: boolean; color: string; }) {
    return isFilled ? (
        <FaStar fontSize="2.5rem" color={color} />
    ) : (
        <FaStarHalfStroke fontSize="2.5rem" color={color} />
    );
}

function RatingStar({value, currentRating, determinedRating}:
                        {value: number, currentRating: InputChangeInterface<number>, determinedRating: InputChangeInterface<number>}) {
    const starRef = useRef<HTMLDivElement>(null);
    const [ isFilled, setIsFilled ] = useState(true);
    
    const handleColor = useMemo(() => {
        return value < (currentRating.value || determinedRating.value) ? oc.yellow[4] : oc.gray[6];
    }, [value, currentRating.value, determinedRating.value])
    
    const handleMouseMove = useMemo(() => {
        return (event: React.MouseEvent<HTMLDivElement>) => {
            if (starRef.current) {
                const offsetX = event.nativeEvent.offsetX;
                const starWidth = starRef.current.getBoundingClientRect().width;
                const halfOver = (starWidth / 2) < offsetX;
                
                setIsFilled(halfOver);
                
                if (halfOver) {
                    currentRating.setValue(value + 1);
                } else {
                    currentRating.setValue(value + 0.5);
                }
            }
        };
    }, [value, currentRating])
    
    const handleMouseLeave = useMemo(() => {
        return () => {
            currentRating.setValue(0);
            
            if (value + 0.5 === determinedRating.value) {
                setIsFilled(false);
            } else {
                setIsFilled(true);
            }
        }
    }, [ determinedRating, value]);
    
    useEffect(() => {
        if (value + 0.5 === determinedRating.value && currentRating.value !== 0 ) {
            setIsFilled(true);
        }
    }, [value, currentRating])
    
    return (
        <div
            ref={starRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <Star
                isFilled={isFilled}
                color={handleColor}
            />
        </div>
    )
}
export default RatingStar;
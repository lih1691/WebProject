import { keyframes } from "styled-components";

export const downUpAnimation = (translateYValue: string) => keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(${translateYValue});
  }
`


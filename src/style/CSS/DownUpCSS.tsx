import {css, keyframes} from 'styled-components';

import {DownUpProps} from "@Interfaces/Style/Animation/DownUpProps";

const downUpKeyframe = (translateYValue: string) => keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(${translateYValue});
  }
`

export const durationDownUp = (props: DownUpProps) => css`
  animation: ${downUpKeyframe(props.$translateYValue)} ${props.$duration} ease-in-out infinite;
`
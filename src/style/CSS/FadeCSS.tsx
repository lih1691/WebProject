import {css} from "styled-components";
import {FocusFadeProps} from "@Interfaces/Style/FadeStyleInterface";
import {FocusProps} from "@Interfaces/Style/ComponentStateInterface";

export const focusOpacityStyle = (props: FocusProps) => css`
  opacity: ${props.$focus ? 1 : 0};
`;

export const focusTransitionStyle = (props: FocusFadeProps) => css`
  transition: ${props.$focus ? props.$fadeInTransition : props.$fadeOutTransition};
`

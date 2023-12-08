import {css} from "styled-components";

export interface FadeInterface {
    $fadeInTransition: string;
    $fadeOutTransition: string;
}

export interface FocusFadeInterface extends FadeInterface {
    $focus: boolean;
}

export const focusOpacityStyle = (props: FocusFadeInterface) => css`
  opacity: ${props.$focus ? 1 : 0};
`;

export const focusTransitionStyle = (props: FocusFadeInterface) => css`
  transition: ${props.$focus ? props.$fadeInTransition : props.$fadeOutTransition};
`

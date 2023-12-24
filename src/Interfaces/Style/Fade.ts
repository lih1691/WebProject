import {FocusProps} from "@Interfaces/Style/Base";

export interface FadeInterface {
    $fadeInTransition: string;
    $fadeOutTransition: string;
}

export interface FocusFadeProps extends FadeInterface, FocusProps {}

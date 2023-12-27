import {FocusProps} from "@Interfaces/Style/ComponentStateInterface";

export interface FadeInterface {
    $fadeInTransition: string;
    $fadeOutTransition: string;
}

export interface FocusFadeProps extends FadeInterface, FocusProps {}

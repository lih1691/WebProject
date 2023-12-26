import {FocusProps} from "@Interfaces/Style/BaseStyleInterface";

export interface FadeInterface {
    $fadeInTransition: string;
    $fadeOutTransition: string;
}

export interface FocusFadeProps extends FadeInterface, FocusProps {}

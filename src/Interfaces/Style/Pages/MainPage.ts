import {ActiveProps, DepthProps, FocusProps, LengthProps} from "@Interfaces/Style/BaseStyleInterface";

export interface MainPagerUlProps extends DepthProps {
    display: string;
    left: string;
    top: string;
    $marginLeft: string;
}

export interface MainPagerLiProps extends LengthProps, FocusProps, ActiveProps{
    color: string;
    $clickedColor: string;
    $transition: string;
    
    $after: {
        top: string;
        left: string;
        height: string;
        $activatedLength: string;
        $deactivatedLength: string;
    }
}
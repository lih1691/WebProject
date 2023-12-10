import {Dispatch, SetStateAction} from "react";

export interface ChangeInterface<T> {
    value: T;
    setValue: Dispatch<SetStateAction<T>>;
    onChange: (newValue: T) => void;
}
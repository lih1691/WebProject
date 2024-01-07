import {ChangeEventHandler, Dispatch, SetStateAction} from "react";

export interface ChangeInterface<T> {
    value: T;
    setValue: Dispatch<SetStateAction<T>>;
    onChange: (newValue: T) => void;
}

export interface InputChangeInterface<T> {
    value: T;
    setValue: Dispatch<SetStateAction<T>>;
    onChange: ChangeEventHandler<HTMLInputElement>;
}


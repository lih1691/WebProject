import {ChangeEventHandler, Dispatch, SetStateAction} from "react";

export interface ChangeInterface<T> {
    value: T;
    setValue: Dispatch<SetStateAction<T>>;
    onChange: (newValue: T) => void;
}

export interface InputChangeInterface {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
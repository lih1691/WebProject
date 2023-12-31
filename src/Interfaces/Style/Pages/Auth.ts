import React from "react";

export interface InputWithLabelProps {
    label: string;
    name: string;
    placeholder: string;
    value: string;
    width: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
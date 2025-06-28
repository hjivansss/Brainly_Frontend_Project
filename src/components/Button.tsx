import type { JSX } from "react";

export interface ButtonProps {
    variant: 'primary'|'secondary';
    text:string,
    size: 'sm' | 'md' | 'lg';
    startIcon?: React.ReactElement;
    onClick?:()=>void;
    fullWidth?:boolean;
    loading?:boolean;
}
const variantStyles={
    'primary': 'bg-brand-600 text-white',
    'secondary': 'bg-brand-300 text-brand-500',
}

const sizeStyles={
    'sm': 'py-1 px-2 rounded-sm',
    'md': 'py-2 px-4 rounded-md',
    'lg': 'py-4 px-8 rounded-lg',
}
const defaultStyles = 'rounded-md';
export function Button(props:ButtonProps): JSX.Element {
    return (
        <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${defaultStyles} cursor-pointer ${props.fullWidth ? " w-full flex justify-center" : ""}  ${props.loading ? "opacity-45" : ""} `} disabled={props.loading}>
            <div className="flex items-center">
                {props.startIcon}
                <span className="pl-2 pr-2 ">{props.text}</span>
            </div>
        </button>
    );
}
import type { JSX } from "react";

export interface ButtonProps {
    variant: 'primary'|'secondary'|'logoutcolor';
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
    'logoutcolor': 'bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700  '
}

const sizeStyles={
    'sm': 'py-1 px-2 rounded-sm',
    'md': 'py-2 px-4 rounded-md',
    'lg': 'py-4 px-8 rounded-lg',
}
const defaultStyles = 'rounded-md';
export function Button(props:ButtonProps): JSX.Element {
    return (
        <button onClick={props.onClick} className={`${variantStyles[props.variant]} py-1 px-1 py-2 rounded-md sm:${sizeStyles[props.size]} ${defaultStyles} cursor-pointer ${props.fullWidth ? " w-full flex justify-center" : ""}  ${props.loading ? "opacity-45" : ""} `} disabled={props.loading}>
            <div className="flex items-center ">
                {props.startIcon}
                <span className=" pl:1 pr:1 pt:2 pb:2 md:pl-2 md:pr-2 ">{props.text}</span>
            </div>
        </button>
    );
}
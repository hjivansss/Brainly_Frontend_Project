import type { ReactElement } from "react";

export function SidebarItem({text,icon,onClick}:{
    text : string;
    icon : ReactElement;
    onClick?:()=>void;
}) {

    return (
            <div className="flex text-gray-800 py-2 cursor-pointer hover:bg-gray-200 rounded max-w-52 pl-4 transition-all duration-200 " onClick={onClick}>
                <div className="pr-2">
                     {icon} 
                </div>
                <div className="">
                     {text}  
                </div>
            </div>
           ) 
        
          
}
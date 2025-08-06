import { TwitterIcon } from "../Icons/Twitter";
import { YoutubeIcon } from "../Icons/Youtube";
import { SidebarItem } from "./SidebarItem";
import { Logo } from "../Icons/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LinkIcon } from "../Icons/LinkIcon";
import { AllIcon } from "../Icons/AllIcon";
import { AboutIcon } from "../Icons/AboutIcon";
import { LogoutIcon } from "../Icons/LogoutIcon";


export function Sidebar({onSelect,  onClose}:{onSelect:(contentType:string )=>void; onClose?: () => void}){
      const [settingsOpen,setsettingsOpen]=useState(false);
      const [aboutOpen,setAboutOpen]= useState(false);
      const navigate = useNavigate();
      const handleLogout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/signup");
    }
     
    return <div className="w-64 md:min-w-72 ">
                <div className="bg-white w-64 md:min-w-72 min-h-screen top-0 left-0 absolute fixed border-r border-gray-100 pl-6 ">
                    <div className="flex text-2xl pt-8 pl-2">
                        <div className="pr-2 text-brand-600 pl-2">
                            <Logo/>
                        </div>
                        Brainly
                    </div>
                    <div className="pt-4 pl-4">
                        <SidebarItem icon={<AllIcon/>} text="All Content" onClick={()=>onSelect('All')}/>
                        <SidebarItem icon={<TwitterIcon/>} text="Twitter" onClick={()=>onSelect('twitter')}/>
                        <SidebarItem icon={<YoutubeIcon/>} text="Youtube" onClick={()=>onSelect('youtube')}/>
                        <SidebarItem icon={<LinkIcon/>}    text="Links"   onClick={()=>onSelect('link')}/>
                        <span className="flex cursor-pointer ml-4 gap-2 pt-1 text-gray-700"  onClick={() => {
                                                                     onClose?.();     // Close sidebar if on mobile
                                                                     navigate("/about");
                                                                     }}>
                          <AboutIcon/>
                          About
                        </span>
                   </div>

                   {/*Settings*/}
                   <div className="absolute bottom-0 left-0 w-full " 
                            >
                        <div className="p-2 m-1 pl-7 flex text-gray-800 bg-gray-200 rounded cursor-pointer hover:bg-gray-300" onClick={handleLogout}>
                              <div className="flex   rounded-lg" >
                                     <LogoutIcon/>
                                    <span className="pl-2">Logout</span>
                        </div>
                                </div>
                            </div>
                        </div>
                   </div>
            
}